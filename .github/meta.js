module.exports = {
    caldera: {
        scope: ['caldera-online-themes', 'plasma-new-hope'],
        'required-deps': [],
    },
    'caldera-online': {
        scope: ['caldera-online-themes', 'plasma-new-hope'],
    },
    'plasma-asdk': {
        scope: ['plasma-tokens', 'plasma-tokens-b2b', 'plasma-typo', 'plasma-themes'],
        'required-deps': ['plasma-core'],
    },
    'plasma-b2c': {
        scope: [
            'plasma-core',
            'plasma-hope',
            'plasma-new-hope',
            'plasma-tokens-b2c',
            'plasma-tokens-web',
            'plasma-typo',
        ],
        'required-deps': ['plasma-new-hope'],
    },
    'plasma-new-hope': {
        scope: ['plasma-core'],
        'required-deps': [],
    },
    'plasma-ui': {
        scope: ['plasma-core', 'plasma-typo'],
        'required-deps': ['plasma-icons'],
    },
    'plasma-web': {
        scope: [
            'plasma-core',
            'plasma-hope',
            'plasma-new-hope',
            'plasma-tokens-b2c',
            'plasma-tokens-b2b',
            'plasma-tokens-web',
            'plasma-typo',
        ],
        'required-deps': ['plasma-new-hope'],
    },
    'sdds-serv': {
        scope: ['sdds-themes', 'plasma-new-hope'],
        'required-deps': [],
    },
};
