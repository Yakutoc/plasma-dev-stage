import { css, switchTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        toggleSize: 'l',
        labelPosition: 'before',
        focused: 'true',
    },
    variations: {
        size: {
            m: css`
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${switchTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${switchTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                ${switchTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${switchTokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${switchTokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${switchTokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${switchTokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
                ${switchTokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${switchTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
        },
        toggleSize: {
            l: css`
                ${switchTokens.trackWidth}: 2.75rem;
                ${switchTokens.trackHeight}: 1.75rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 1.5rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffsetOn}: 0.125rem;
                ${switchTokens.thumbOffsetOff}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
            `,
        },
        view: {
            default: css`
                ${switchTokens.labelColor}: var(--text-primary);
                ${switchTokens.descriptionColor}: var(--text-secondary);
                ${switchTokens.trackBackgroundColorOn}: var(--surface-accent-main);
                ${switchTokens.trackBackgroundColorOnHover}: var(--surface-accent-main-hover);
                ${switchTokens.trackBackgroundColorOff}: var(--surface-transparent-secondary);
                ${switchTokens.trackBackgroundColorOffHover}: var(--surface-transparent-secondary-hover);
                ${switchTokens.trackBorderWidthOn}: 0;
                ${switchTokens.trackBorderWidthOff}: 0;
                ${switchTokens.thumbBackgroundColorOn}: var(--on-dark-surface-solid-default);
                ${switchTokens.thumbBackgroundColorOff}: var(--on-dark-surface-solid-default);
                ${switchTokens.thumbBoxShadow}: 0 1px 1px rgba(0, 0, 0, 0.11);
            `,
        },
        disabled: {
            true: css`
                ${switchTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${switchTokens.trackFocusColor}: var(--surface-accent-main);
            `,
        },
    },
};
