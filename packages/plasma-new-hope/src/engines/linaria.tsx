import React from 'react';

import { cx } from '@linaria/core';

import { getStaticVariants, getDynamicVariants, ComponentConfig } from './common';

/** linaria engine */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, defaults, name } = componentConfig;
    const staticVarians = getStaticVariants(componentConfig);
    const dynamicVarians = getDynamicVariants(componentConfig);
    const Root = tag as React.ElementType;

    const component: React.FC<{ className: string }> = ({ className, ...rest }) => {
        const variants = dynamicVarians({ ...defaults, ...rest });
        const cls = cx(className, base, ...staticVarians, ...variants);

        // styled-components do it inside
        // filter props
        const props: Record<string, any> = {};
        for (const key in rest) {
            if (!(key in componentConfig.variations)) {
                props[key] = (rest as Record<string, any>)[key];
            }
        }

        // styled-components do it inside
        // add props that should be attr( disabled for example)
        const htmlAttrs: Record<string, any> = {};
        for (const [key, value] of Object.entries(componentConfig.variations || {})) {
            if (key in rest) {
                const attrs = value.attrs;
                if (typeof attrs === 'boolean') {
                    htmlAttrs[key] = (rest as Record<string, any>)[key];
                }
            }
        }

        return <Root className={cls} {...htmlAttrs} {...props} />;
    };
    if (name) {
        component.displayName = name;
    }
    return component;
};
/** linaria engine */

export function component(config: ComponentConfig) {
    return config.layout(_component(config));
}


