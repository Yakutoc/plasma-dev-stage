#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');

const { stripIndent } = require('common-tags');

const { t } = require('../src/transform');

const PATH_TO_THEMES = process.env.PATH_TO_THEMES;
const PATH_TO_DESTINATION_CONFIG = process.env.PATH_TO_DESTINATION_CONFIG;

!async function() {

    if (!PATH_TO_THEMES) {
        console.error('provide PATH_TO_THEMES');
        return;
    }
    if (!PATH_TO_DESTINATION_CONFIG) {
        console.error('provide PATH_TO_DESTINATION_CONFIG');
        return;
    }

    const themes = await getThemes();

    for (const theme of themes) {
        await writeTheme(theme);
    }

}()


async function getThemes() {
    const dirs = await getThemeNames();

    const res = [];

    for (const dir of dirs) {
        const themeFilePath = path.join(PATH_TO_THEMES, dir, 'theme.json');
        const value = await fs.readJSON(themeFilePath);

        res.push(value);
    }

    return res;
}

async function getThemeNames() {
    const dirs = await fs.readdir(path.join(PATH_TO_THEMES));

    return dirs;
}


async function writeTheme(theme) {
    const destination = path.join(PATH_TO_DESTINATION_CONFIG, theme.name);
    await fs.ensureDir(destination);

    const components = theme.components;

    if (!components) {
        return;
    }

    for (const componentName of Object.keys(components)) {
        await writeComponent(componentName, components[componentName], theme.name, destination);
    }
}

async function writeComponent(componentName, componentConfig, themeName, dir) {
    const componentDir = path.join(dir, 'components', componentName);

    await fs.ensureDir(componentDir);

    const componentFilePath = path.join(componentDir, componentName + '.ts');
    const componentFile = tmplComponent(componentName); 

    console.log(componentFilePath);
    await fs.writeFile(componentFilePath, componentFile);
    console.log();


    const componentConfigFilePath = path.join(componentDir, componentName + '.config.ts');
    const componentConfigFile = tmplCompConfig(componentConfig);

    await fs.writeFile(componentConfigFilePath, componentConfigFile);


    const componentStoryFilePath = path.join(componentDir, componentName + '.stories.tsx');
    const componentStoryFile = tmplStory(themeName, componentName, componentConfig);

    await fs.writeFile(componentStoryFilePath, componentStoryFile);
}


function tmplComponent(name) {
    const _name = name.toLowerCase();

    return stripIndent`
        // generated by theme-builder { version } { plasma-hope-version??? }
        import { ${_name}Config } from '../../../../components/${name}';
        import { component, mergeConfig } from '../../../../engines';

        import { config } from './${name}.config';

        const _config = mergeConfig(${_name}Config, config);

        export const ${name} = component(_config);
    `;
}



// add spaces to each line
const indent = (str, spaces = 8) => str.replace(/^/gm, ' '.repeat(spaces));
const _indent = (str, spaces) => indent(str, spaces).trimLeft();

const noModKeys = t.key(key => key.replace('_', ''));



function tmplCompConfig(config) {

    const meta = { hasCss: false };

    const transform = t({
        defaults: noModKeys(),
        variations: noModKeys({
            _: {
                _: tokensToCss(meta)
            }
        })
    });

    const res = transform(config);

    return stripIndent`
        // generated by theme-builder { version } { plasma-hope-version??? }
        ${indent(tmplImportCss(meta))}
        export const config = ${_indent(res)}; 
    `;
}

// TODO: import { css } from 'plasma-new-hope';
function tmplImportCss(meta) {
    if (meta.hasCss) {
        return '\n' + "import { css } from '@linaria/core';" + '\n';
    } else {
        return '';
    }
}

function tokensToCss(meta, indention = 4) {
    return (tokens, level) => {
        const _ = ' '.repeat(indention * level);
        const __ = ' '.repeat(indention * (level + 1));

        const res = ['css`'];

        for (const token of Object.keys(tokens)) {
            res.push(`${__}${token}: ${tokens[token]};`);
        }

        if (res.length > 1) {
            meta.hasCss = true;
        }

        res.push(_ + '`');

        return res.join('\n');
    }
}



function tmplStory(themeName, componentName, config) {

    const { defaults, variations } = config;

    // TODO: actually we could transform config to args in runtime not in codegen
    const argTypes = {};
    for (const [key, val] of Object.entries(variations)) {
        const control = {
            control: {}
        };
        if (val['true']) {
            control.control.type = 'boolean';
            control.defaultValue = false;
        } else {
            control.control.type = 'select';
            control.options = Object.keys(val);
        }

        const defaultValue = defaults[key];
        if (defaultValue) {
            control.defaultValue = val['true'] ? Boolean(defaultValue) : defaultValue;
        }

        argTypes[key] = control;
    }

    const argTypesToStr = noModKeys();

    return stripIndent`
        // generated by theme-builder { version } { plasma-hope-version??? }
        import React from 'react';

        import { ComponentStory, ComponentMeta } from '@storybook/react';

        import { ${componentName} } from './${componentName}';

        export default {
            title: '${themeName}/${componentName}',
            component: ${componentName},
            argTypes: ${_indent(argTypesToStr(argTypes), 12)},
        } as ComponentMeta<typeof ${componentName}>;

        export const Default: ComponentStory<typeof ${componentName}> = (props) => {
            return (
                <div style={{ padding: '1rem' }}>
                    <${componentName} {...props}>Hello</${componentName}>
                </div>
            )
        };

    `;
}
