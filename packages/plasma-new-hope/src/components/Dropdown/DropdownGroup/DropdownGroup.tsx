import React, { forwardRef } from 'react';
// import { useForkRef, useUniqId } from '@salutejs/plasma-core';
// import { styled } from '@linaria/react';

import { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { StyledDropdownGroup, StyledDropdownLabel } from './DropdownGroup.styles';

type DropdownGroupProps = any;

/**
 * Элемент выпадающего списка
 */
export const dropdownGroupRoot = (Root: RootProps<HTMLDivElement, DropdownGroupProps>) =>
    forwardRef<HTMLDivElement, DropdownGroupProps>(
        (
            {
                // id,
                // className,
                label,
                children,
                // role,
                view,
                size,
                disabled,
                ...rest
            },
            outerRootRef,
        ) => {
            // const uniqId = useUniqId();
            // const innerId = id || uniqId;

            return (
                <Root view={view} size={size} disabled={disabled}>
                    <StyledDropdownLabel>{label}</StyledDropdownLabel>
                    <StyledDropdownGroup {...rest}>{children}</StyledDropdownGroup>
                </Root>
            );
        },
    );

export const dropdownGroupConfig = {
    name: 'DropdownGroup',
    tag: 'div',
    layout: dropdownGroupRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
