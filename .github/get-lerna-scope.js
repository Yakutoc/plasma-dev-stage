const META = require('./meta');

module.exports = () => {
    const { PROCESSED_DATA, PACKAGE } = process.env;

    const processedData = JSON.parse(PROCESSED_DATA);

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
