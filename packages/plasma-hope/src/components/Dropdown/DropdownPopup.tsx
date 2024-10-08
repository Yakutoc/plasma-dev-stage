import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { Popup, PopupProps } from '../Popup';

export interface DropdownPopupProps extends PopupProps {
    /**
     * Отступ сверху.
     * @deprecated
     */
    offsetTop?: string | number;
}

/**
 * Popup с внешним контролем над видимостью через props: `opened` и `onToggle`.
 */
export const DropdownPopup = styled(Popup)<DropdownPopupProps>`
    & & {
        width: 100%;

        --plasma-popup-width: var(--plasma-popup-nested-width);
        --plasma-popup-padding: var(--plasma-popup-nested-padding);
        --plasma-popup-margin: var(--plasma-popup-nested-margin);
    }

    ${({ offsetTop }) =>
        offsetTop !== undefined &&
        css`
            --plasma-popup-padding: ${offsetTop} 0 0;
        `}
`;

/**
 * Popup, не требующий внешнего контроля над видимостью.
 */
export const DropdownSelfControlledPopup: FC<Omit<DropdownPopupProps, 'opened' | 'isOpen' | 'onToggle'>> = ({
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return <DropdownPopup {...rest} opened={isOpen} onToggle={(is) => setIsOpen(is)} />;
};
