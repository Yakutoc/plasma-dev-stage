const fs = require('node:fs/promises');
const core = require('@actions/core');
const github = require('@actions/github');

const teammates = require('../../teammates.json');

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

function getRandomReviewers(teammates) {
    if (!teammates || teammates.length === 0 || teammates.length < 2) {
        return teammates;
    }

    const selectedKeys = [];

    for (let i = 0; i < 2; ) {
        const randomIndex = getRandomIndex(teammates);
        const randomKey = teammates[randomIndex];

        if (!selectedKeys.includes(randomKey)) {
            selectedKeys.push(randomKey);
            i++;
        }
    }

    return selectedKeys;
}

const reviewersFormatter = (acc, member) => {
    acc.mm_list += `@${teammates[member]} `;
    acc.gh_list.push(member);

    return acc;
};

async function run() {
    try {
        const token = core.getInput('token');

        const octokit = new github.getOctokit(token);
        const context = github.context;

        if (context.payload.pull_request == null) {
            core.setFailed('No pull request found.');

            return;
        }

        const authorPullRequest = context.payload.pull_request.user.login || 'Yakutoc';

        // INFO: Собираем все открытые pull request которые готовы к review и где автор не бот
        // INFO: Запись формата `-draft:VALUE` значит исключить по условию
        const {
            data: { items },
        } = await octokit.rest.search.issuesAndPullRequests({
            q: `repo:salute-developers/plasma is:pr is:open review:required -draft:true -author:renovate[bot]`,
            per_page: 10,
        });

        const listPullRequests = items.map(({ number }) => number);

        // INFO: Получаем список участников для review для каждого pull request
        // INFO: Once a requested reviewer submits a review, they are no longer considered a requested reviewer.
        // INFO: Their review will instead be returned by the List reviews for a pull request operation.
        const listRequestedReviewers = (
            await Promise.all(
                listPullRequests.map(async (number) => {
                    const {
                        data: { users },
                    } = await octokit.rest.pulls.listRequestedReviewers({
                        owner: 'salute-developers',
                        repo: 'plasma',
                        pull_number: number,
                    });

                    return users.map(({ login }) => ({ id: number, reviewer: login }));
                }),
            )
        ).flat();

        // INFO: Считаем кол-во участия для каждого участника review
        // INFO: Пример вывода, Map(3) { TitanKuzmich => 2, shuga2704 => 1, Yakutoc => 0 }
        const mapReviewersByCount = listRequestedReviewers.reduce((acc, { reviewer }) => {
            const count = acc.has(reviewer) ? acc.get(reviewer) + 1 : 1;

            acc.set(reviewer, count);

            return acc;
        }, new Map());

        // INFO: Исключаем из списка автора pull request и тех кто уже назначен на review больше 2 раз
        const reviewers = Object.keys(teammates)
            .filter((key) => {
                return mapReviewersByCount.has(key) ? mapReviewersByCount.get(key) < 2 : true;
            })
            .filter((key) => key !== authorPullRequest);

        const reviewersState = { mm_list: '@alex_czech', gh_list: ['Yakutoc'] };

        if (!reviewers.length) {
            // core.setOutput('reviewers', reviewersState);
        }

        if (reviewers.length <= 2) {
            core.setOutput('reviewers', reviewers.reduce(reviewersFormatter, { mm_list: '', gh_list: [] }));
        }

        const randomReviewers = getRandomReviewers(reviewers);

        // core.setOutput('reviewers', randomReviewers.reduce(reviewersFormatter, { mm_list: '', gh_list: [] }));

        core.setOutput('reviewers', {
            mm_list: ['@aakrivonos', '@aaneretin'].join(','),
            gh_list: ['neretin-trike'],
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
