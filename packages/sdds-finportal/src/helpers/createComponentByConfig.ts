// INFO: Temporary method
import { component, mergeConfig } from '@salutejs/plasma-new-hope';

export const createComponentByConfig = (baseConfig: any, config: any) => {
    const componentConfig = mergeConfig(baseConfig, config);

    return component(componentConfig);
};
