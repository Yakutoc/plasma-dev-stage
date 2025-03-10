import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { Image } from '@salutejs/plasma-core';
import { IconDone, IconDrag } from '@salutejs/plasma-icons';

import { Footnote2 } from '../Typography';

import { AddionalItemProps, StatusType, TooltipItem } from './types';

export const buttonMixin = (vPosition: 'left' | 'right', bgColor: string, color: string) => css`
    position: absolute;
    top: 0.25rem;
    ${vPosition}: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    padding: 0;

    appearance: none;
    background-color: ${bgColor};
    border: 0 none;
    border-radius: 100%;
    color: ${color};
    cursor: pointer;
`;

export const StyledSelectButton = styled.button`
    ${buttonMixin('left', 'var(--text-accent)', 'var(--on-dark-text-primary)')};
`;

export const StyledTrashButton = styled.button`
    ${buttonMixin('right', 'var(--text-negative)', 'var(--on-dark-text-secondary)')};

    &:hover {
        color: var(--on-dark-text-primary);
    }
`;

export const StyledIconDrag = styled(IconDrag)`
    ${buttonMixin('left', 'transparent', 'var(--on-dark-text-primary)')};

    svg {
        opacity: 0.24;
    }
`;

// NOTE: don't know how to fix ts error TS2742
type styledCaption = typeof Footnote2;

export const StyledCaption: styledCaption = styled(Footnote2)`
    position: absolute;
    left: 0.625rem;
    bottom: 0.5rem;
    color: var(--on-dark-text-tertiary);
`;

export const StyledItem = styled.div<{ width?: string }>`
    position: relative;
    border-radius: 0.75rem;

    height: 100%;

    ${({ width }) =>
        width &&
        css`
            width: ${width};
        `}

    ${StyledTrashButton} {
        display: none;
    }

    &:hover {
        transform: scale(1.04);

        ${StyledTrashButton} {
            display: flex;
        }
    }
`;

export interface PreviewGalleryItemProps {
    /**
     * Идентификатор элемента.
     */
    id: string | number;
    /**
     * Конечный путь до превью элемента.
     */
    image?: string;
    /**
     * React компонент передаваемый вместо image.
     */
    component?: JSX.Element;
    /**
     * Обработчик клика на элемент.
     */
    customClickHandle?: (id: string | number) => void;
    /**
     * Дополнительное описание элемента.
     */
    caption?: string;
    /**
     * Состояние элемента.
     */
    status?: StatusType;
    /**
     * Выделен ли элемент.
     */
    isSelected?: boolean;
    /**
     * Отключает кнопку действия.
     */
    actionDisabled?: boolean;
    /**
     * Настройки для отображения tooltip.
     */
    tooltip?: TooltipItem;
}

/**
 * Базовый компонент с превью.
 */
export const PreviewGalleryItemBase = memo(
    ({
        id,
        itemSize,
        image = '',
        component,
        customClickHandle,
        isSelected,
        caption,
        interactionType,
        actionIcon,
        status,
        onItemAction,
        onItemClick,
        actionDisabled,
    }: PreviewGalleryItemProps & AddionalItemProps) => {
        const itemActionHandle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();
            onItemAction?.(id);
        };

        return !component ? (
            <StyledItem
                width={itemSize}
                key={id}
                onClick={customClickHandle ? () => customClickHandle(id) : () => onItemClick?.(id)}
            >
                <Image base="div" src={image} ratio="16 / 9" />

                {!actionDisabled && (
                    <StyledTrashButton type="button" onClick={itemActionHandle}>
                        {actionIcon}
                    </StyledTrashButton>
                )}

                {interactionType === 'selectable' && status !== 'error' ? (
                    isSelected && (
                        <StyledSelectButton type="button">
                            <IconDone size="xs" color="inherit" />
                        </StyledSelectButton>
                    )
                ) : (
                    <StyledIconDrag size="xs" color="inherit" />
                )}

                {caption && <StyledCaption>{caption}</StyledCaption>}
            </StyledItem>
        ) : (
            <StyledItem
                width={itemSize}
                key={id}
                onClick={customClickHandle ? () => customClickHandle(id) : () => onItemClick?.(id)}
            >
                {component}
            </StyledItem>
        );
    },
);
