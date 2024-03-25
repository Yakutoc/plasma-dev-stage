const META = require('./meta');

module.exports = () => {
    const { PACKAGE } = process.env;

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

    const packageScope = META[PACKAGE].scope || [];
    const requiredDeps = META[PACKAGE]['required-deps'] || [];

    const deps = [...packageScope, `${PACKAGE}-docs`, 'plasma-icons'];

    const computedScope = processedData.filter((dep) => deps.includes(dep));

    const scope = [...computedScope, ...requiredDeps, PACKAGE, 'plasma-docs-ui'];

    // TODO: Как избавиться от этой зависимости
    if (processedData.includes('plasma-tokens-native')) {
        scope.push('plasma-tokens');
        scope.push('plasma-tokens-utils');
    }

    console.log('Result =>', scope);

    return `@salutejs/{${scope.join(',')}}`;
};
