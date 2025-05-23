const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const token = core.getInput('token');
        const sha = core.getInput('sha');
        const message = core.getInput('message');

        if (!message || !message.length) {
            core.setFailed('Commit message empty');
        }

        if (!token) {
            core.setFailed('token error');
        }

        if (!sha || !sha.length) {
            core.setFailed('Commit sha empty');
        }

        const octokit = new github.getOctokit(token);
        const { owner, repo } = github.context.repo;

        const data = message
            .replace(/.*Bump independent versions.*\n?/g, '') // убираем заголовок commit message
            .replace(/.*docs.*\n?/g, '') // убираем пакеты с документацией
            .replace(/.*website.*\n?/g, '') // убираем пакет plasma-website
            .replace(/.*sdds-clfd-auto.*\n?/g, '') // убираем пакет sdds-clfd-auto
            .replace(/^\s*[\r\n]/gm, '') // убираем лишние пустые строки
            .trim()
            .split('\n')
            .map((line) => line.trim());

        const comment = `
          This PR is included in version:

          ${data.join('\n')}
        `;

        // TODO: Брать информацию из контекста для owner, repo
        const pullRequest = await octokit.rest.repos.listPullRequestsAssociatedWithCommit({
            commit_sha: sha,
            owner: 'salute-developers',
            repo: 'plasma',
        });

        // INFO: Получаем body релизного pull request в описание которого есть все нужные id merged pull request
        const pullRequestBody = pullRequest?.data[0].body || '';

        // INFO: Для парсинга строки типа "[PR](https://github.com/salute-developers/plasma/pull/1952)"
        const prLinkRegex = /\[PR\]\(https:\/\/github\.com\/[^\/]+\/[^\/]+\/pull\/(\d+)\)/g;

        //INFO: Собираем все вхождения по регулярному выражению
        const matches = Array.from(pullRequestBody.matchAll(prLinkRegex));

        // const pullRequestListID = matches.map(match => parseInt(match[1], 10));
        const pullRequestListID = [49, 53];

        for (const id of pullRequestListID) {
            await octokit.rest.issues.createComment({
                owner,
                repo,
                issue_number: id,
                body: comment,
            });
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
