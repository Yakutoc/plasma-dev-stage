import React, { useCallback, useState, useRef } from 'react';
import type { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';
import { IconMic } from '@salutejs/plasma-icons';

import { InSpacingDecorator, disableProps } from '../../helpers';

import { Button } from '.';
import type { ButtonProps as Base } from '.';

type ButtonProps = ComponentProps<Base>;

const views = ['default', 'accent', 'accent-gradient', 'success', 'warning', 'critical', 'dark', 'light'];
const sizes = ['xl', 'l', 'm', 's', 'xs', 'xxs'];
const stretchingValues = ['auto', 'filled', 'fixed'];
const pinValues = [
    '',
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
];
const contentPlacinValues = ['default', 'relaxed'];

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<ButtonProps> = {
    title: 'Data Entry/Button',
    decorators: [InSpacingDecorator],
    component: Button,
    args: {
        view: 'default',
        size: 'm',
        contentPlacing: 'default',
        stretching: 'auto',
        text: 'Hello',
        value: 'Value',
        disabled: false,
        focused: true,
        square: false,
        isLoading: false,
    },
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        value: {
            control: {
                type: 'text',
            },
        },
        contentPlacing: {
            options: contentPlacinValues,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretchingValues,
            control: {
                type: 'select',
            },
        },
        pin: {
            options: pinValues,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
        ...disableProps([
            'theme',
            'loader',
            'onClick',
            'onFocus',
            'onBlur',
            'outlined',
            'contentLeft',
            'contentRight',
            'shiftLeft',
            'shiftRight',
            'stretch',
            'as',
            'forwardedAs',
            'pin',
            'focused',
        ]),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Button> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StyledIconMic = styled(IconMic)<{ customSize?: string }>`
    ${({ customSize }) =>
        customSize &&
        `
            width: ${customSize};
            height: ${customSize};
            flex: 0 0 ${customSize};
        `}
`;

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    const iconSize = size === 's' || size === 'xs' || size === 'xxs' ? 'xs' : 's';
    const iconCustomSize = size === 'm' ? '1.25rem' : undefined;

    return (
        <Button
            contentLeft={
                enableContentLeft ? (
                    <StyledIconMic customSize={iconCustomSize} size={iconSize} color="inherit" />
                ) : undefined
            }
            contentRight={
                enableContentRight ? (
                    <StyledIconMic customSize={iconCustomSize} size={iconSize} color="inherit" />
                ) : undefined
            }
            size={size}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
        enableContentRight: false,
        value: '',
    },
    argTypes: {
        ...disableProps(['value']),
    },
    render: (args) => <StoryDefault {...args} />,
};

export const WithValue: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
    },
    argTypes: {
        ...disableProps(['enableContentRight']),
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryLoading = ({
    enableContentLeft,
    enableContentRight,
    size,
    isLoading,
    onClick: _onClick,
    ...rest
}: StoryPropsDefault) => {
    const [loading, setLoading] = useState(isLoading);
    const [count, setCount] = useState(0);
    const intervalId = useRef<number | undefined>();

    const iconSize = size === 's' || size === 'xs' || size === 'xxs' ? 'xs' : 's';
    const iconCustomSize = size === 'm' ? '1.25rem' : undefined;

    const onClickHandle = useCallback(
        (event) => {
            event.persist();

            _onClick?.(event);

            setLoading(true);

            intervalId.current = window.setInterval(() => {
                setCount((prev) => {
                    return prev + 1;
                });
            }, 1_000);
        },
        [_onClick],
    );

    if (count === 6) {
        setLoading(false);
        setCount(0);
        window.clearInterval(intervalId.current);
    }

    return (
        <Button
            autoFocus
            onClick={onClickHandle}
            contentLeft={
                enableContentLeft ? (
                    <StyledIconMic customSize={iconCustomSize} size={iconSize} color="inherit" />
                ) : undefined
            }
            contentRight={
                enableContentRight ? (
                    <StyledIconMic customSize={iconCustomSize} size={iconSize} color="inherit" />
                ) : undefined
            }
            isLoading={loading}
            size={size}
            loader={<div>Loading - {count}</div>}
            {...rest}
        />
    );
};

export const Loading: StoryObj<StoryPropsDefault> = {
    args: {
        ...Default.args,
        text: 'Start loading',
        value: '',
    },
    argTypes: {
        ...disableProps(['text', 'value']),
    },
    render: (args) => <StoryLoading {...args} />,
};
