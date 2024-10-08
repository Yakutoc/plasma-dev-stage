import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from '../../Combobox.tokens';
import { addFocus, applyEllipsis } from '../../../../../mixins';

export const StyledContentLeft = styled.div`
    display: inline-flex;

    min-width: var(${tokens.itemContentLeftWidth});
    color: var(${tokens.itemContentLeftColor});
`;

export const StyledContentRight = styled.div`
    margin-left: auto;
    display: inline-flex;

    min-width: var(${tokens.itemContentRightWidth});
    color: var(${tokens.itemContentRightColor});
`;

export const StyledText = styled.div`
    ${applyEllipsis()};
`;

// INFO: Для возможности переиспользования стилей в других компонентах
export const baseContent = `
    box-sizing: content-box;
    display: flex;
    align-items: center;
    user-select: none;

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0.0625rem',
        outlineOffset: '0',
        outlineColor: `var(${tokens.focusColor})`,
        outlineRadius: `var(${tokens.itemBorderRadius})`,
        hasTransition: false,
    })};

    width: 100%;

    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeightBold});
    letter-spacing: var(${tokens.itemFontLetterSpacing});
    line-height: var(${tokens.itemFontLineHeight});

    background: var(${tokens.itemBackground});
    color: var(${tokens.itemColor});
    border-radius: var(${tokens.itemBorderRadius});

    width: var(${tokens.itemWidth});
    height: var(${tokens.itemHeight});

    padding: var(${tokens.itemPaddingTop}) var(${tokens.itemPaddingRight}) var(${tokens.itemPaddingBottom})
        var(${tokens.itemPaddingLeft});

    margin: var(${tokens.itemMarginTop}) var(${tokens.itemMarginRight}) var(${tokens.itemMarginBottom})
        var(${tokens.itemMarginLeft});

    &:hover:not(.${classes.comboboxItemIsDisabled}) {
        cursor: pointer;
        background: var(${tokens.itemBackgroundHover});
    }

    &.${String(classes.comboboxItemIsSelected)} {
        color: var(${tokens.itemColorSelected});
        background: var(${tokens.itemBackgroundSelected});

        &:hover:not(.${classes.comboboxItemIsDisabled}) {
            background: var(${tokens.itemBackgroundSelectedHover});
        }
    }

    &.${classes.comboboxItemIsDisabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;

export const base = css`
    ${baseContent};
`;
