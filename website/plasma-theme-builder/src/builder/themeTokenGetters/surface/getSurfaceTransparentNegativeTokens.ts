import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceTransparentNegativeTokens = () => {
    const opacityValue = -0.72;

    const darkValue = `[general.red.500][${opacityValue}]`;
    const lightValue = `[general.red.500][${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет фона поверхности/контрола предупреждение',
        onDark: 'Прозрачный цвет фона поверхности/контрола предупреждение на темном фоне',
        onLight: 'Прозрачный цвет фона поверхности/контрола предупреждение на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
