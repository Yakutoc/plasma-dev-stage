import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { sberPortal, sberBox, touch } from '@salutejs/plasma-tokens/typo';
import { sberPortalScale } from '@salutejs/plasma-tokens';

import { detectDevice, deviceScales, DeviceKind } from '../../utils';

/* stylelint-disable */
const uppercaseCheck = /([A-Z])/;
const uppercasePattern = /([A-Z])/g;
const prefixAndLowerCase = (char: string): string => `-${char.toLowerCase()}`;
const hyphenate = (str: string) => (uppercaseCheck.test(str) ? str.replace(uppercasePattern, prefixAndLowerCase) : str);
const transformStyles = (styles: { ':root': object }) => `
:root {
    ${Object.entries(styles[':root'])
        .map(([key, value]) => `${hyphenate(key)}: ${value}`)
        .join(';')}
}`;

const typoSizes = {
    sberBox: createGlobalStyle`${transformStyles(sberBox)}`,
    sberPortal: createGlobalStyle`${transformStyles(sberPortal)}`,
    touch: createGlobalStyle`${transformStyles(touch)}`,
};
/* stylelint-enable */

export interface DeviceThemeProps {
    /**
     * Объект темы для стилизованных компонентов.
     *
     * Внутри `DeviceThemeProvider` использует `styled-components/ThemeProvider`
     * и расширяет объект темы полем `deviceScale`.
     */
    theme?: object;
    /**
     * Пользовательская функция определения устройства.
     *
     * Должна возвращать 3 возможных значения - `sberBox` или `sberPortal` или `touch`.
     *
     * Возвращаемое значение  по умолчанию - `sberBox`.
     *
     * При значениях `sberBox` и `sberPortal` типографика примет размер **x2**, а при `touch` - **x1**.
     */
    detectDeviceCallback?: () => DeviceKind;
}

/**
 * Провайдер обязателен для использования, необходимо обернуть в него все приложение.
 *
 * Назначение - определяет, на какой *поверхности* (**устройстве**) запущено приложение.
 *
 * В зависимости от поверхности, применяет глобальные стили типографики,
 * подходящие данной платформе, ко всему приложению.
 *
 * Функцией определения по умолчанию тип поверхности определяется на основании `userAgent`,
 * при отсутствии `navigator` или `userAgent`, поверхность будет определен как `sberBox`.
 *
 * Имеется возможность передать провайдеру собственную логику определения девайса
 * с помощью пропса `detectDeviceCallback`.
 * При этом стоит помнить, что разрешены только 3 стандартных значения.
 */
export const DeviceThemeProvider: React.FC<DeviceThemeProps> = ({
    theme,
    children,
    detectDeviceCallback = detectDevice,
}) => {
    const deviceKind = detectDeviceCallback();
    const deviceScale = deviceScales[deviceKind] || sberPortalScale;
    const Typo = React.useMemo(() => typoSizes[deviceKind], [deviceKind]);

    return (
        <ThemeProvider theme={{ ...theme, deviceScale }}>
            <Typo />
            {children}
        </ThemeProvider>
    );
};
