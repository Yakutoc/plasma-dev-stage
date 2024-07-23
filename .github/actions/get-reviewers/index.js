const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const token = core.getInput('token');

        const octokit = new github.getOctokit(token);
        const context = github.context;

        if (context.payload.pull_request == null) {
            core.setFailed('No pull request found.');

            return;
        }

        // Получение последних 15 pull запросов
        const pulls = await octokit.rest.pulls.list({
            owner: 'salute-developers',
            repo: 'plasma',
            per_page: 15,
            state: 'open',
        });

        const data = pulls.data
            .filter(({ draft }) => !draft)
            .flatMap(({ requested_reviewers }) => requested_reviewers.map(({ login }) => login));

        const data2 = data.reduce((acc, reviewer) => {
            acc.set(reviewer, acc.has(reviewer) ? acc.get(reviewer) + 1 : 1);

            return acc;
        }, new Map());

        // for (const reviewers of data) {
        //     console.log(`Reviewers: ${reviewers.join(', ')}`);
        // }

        console.log('DATA => ', data);
        console.log('DATA 2 => ', data2);

        // const pullRequestNumber = context.payload.pull_request.number;

        await octokit.rest.pulls.requestReviewers({
            ...context.repo,
            pull_number: context.payload.pull_request.number,
            reviewers: ['neretin-trike'],
        });

        // const params = {
        //     ...context.repo,
        //     pull_number: pullRequestNumber,
        //     reviewers: [],
        // };
        //
        // octokit.pulls.requestReviewers(params);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
