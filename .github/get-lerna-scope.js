const CONFIG = require('./config-ci.json');

module.exports = () => {
    const { PROCESSED_DATA, PACKAGE } = process.env;

    const processedData = JSON.parse(PROCESSED_DATA);
    const { meta } = CONFIG;

    const deps = [...(meta[PACKAGE] || []), `${PACKAGE}-docs`];

    const scope = [
        ...processedData.filter((dep) => deps.includes(dep)),
        PACKAGE,
        'plasma-core',
        'plasma-docs-ui',
        'plasma-icons',
    ];

    // INFO: Пока не починили медленный css build for b2c/web ставим plasma-new-hope
    if (scope.includes('plasma-b2c') || scope.includes('plasma-web')) {
        scope.push('plasma-new-hope');
    }

    // TODO: Как избавиться от этой зависимости
    if (processedData.includes('plasma-tokens-native')) {
        scope.push('plasma-tokens');
        scope.push('plasma-tokens-utils');
    }

    console.log('Result =>', scope);

    return `@salutejs/{${scope.join(',')}}`;
};
