const META = require('./meta');

module.exports = () => {
    const { PACKAGE } = process.env;

    // INFO: результат команды `lerna la --since` - список пакетов в которых были изменения
    const processedData = [
        'caldera-online',
        'caldera',
        'plasma-asdk',
        'plasma-b2c',
        'plasma-core',
        'plasma-hope',
        'plasma-new-hope',
        'plasma-tokens-b2b',
        'plasma-tokens-b2c',
        'plasma-tokens-web',
        'plasma-tokens',
        'plasma-ui',
        'plasma-web',
        'sdds-serv',
        'caldera-online-themes',
        'data-themes',
        'flamingo-themes',
        'plasma-themes',
        'sdds-themes',
        'plasma-cy-utils',
        'plasma-docs-ui',
        'plasma-sb-utils',
        'plasma-tokens-native',
        'plasma-tokens-utils',
        'plasma-theme-builder',
        'plasma-ui-docs',
        'plasma-web-docs',
        'plasma-website',
        'sdds-serv-docs',
    ];

    // INFO: Список пакетов которые нужно поставить если они есть в списке processedData
    const packageScope = META[PACKAGE].scope || [];
    const packageTheme = META[PACKAGE].themes;

    // INFO: Список обязательных пакетов без которых не будет работать сборка
    // INFO: Например для корректной сборки storybook в `plasma-asdk` нужно ставить plasma-core
    // INFO: Это workaround - временно позволяет обойти ошибки в инфре
    const requiredDeps = META[PACKAGE]['required-deps'] || [];

    // INFO: Пакет с документацией, например `plasma-web-docs` или `sdds-serv-docs`
    const packageDocs = `${PACKAGE}-docs`;

    const computedScope = processedData.filter((dep) => [...packageScope, packageDocs].includes(dep));

    const scope = new Set([...computedScope, ...requiredDeps, PACKAGE, 'plasma-docs-ui']);

    if (scope.has(packageTheme)) {
        scope.add('data-themes');
        scope.add('plasma-typo');
    }

    // TODO: Как избавиться от этой зависимости
    if (processedData.includes('plasma-tokens-native')) {
        scope.add('plasma-tokens');
        scope.add('plasma-tokens-utils');
        scope.add('plasma-tokens-native');
    }

    console.log('Result =>', Array.from(scope));

    return `@salutejs/{${Array.from(scope).join(',')}}`;
};
