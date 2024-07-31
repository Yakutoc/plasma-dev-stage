import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Switch } from '.';
import type { SwitchProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

type StorySwitchProps = {
    labelPosition: 'before' | 'after';
} & SwitchProps;

const meta: Meta<StorySwitchProps> = {
    title: 'Controls/Switch',
    component: Switch,
    decorators: [InSpacingDecorator],
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        labelPosition: {
            options: ['before', 'after'],
            control: {
                type: 'select',
            },
        },
        ...disableProps([
            'id',
            'onFocus',
            'onBlur',
            'onChange',
            'value',
            'checked',
            'description',
            'focused',
            'pressed',
            'outlined',
            'theme',
            'as',
            'forwardedAs',
        ]),
    },
};

export default meta;

const StyledWrapper = styled.div`
    width: 13.75rem;
`;

const StoryDefault = (args: StorySwitchProps) => {
    const value = 0;
    const [checked, setChecked] = useState(true);

    return (
        <StyledWrapper>
            <Switch
                value={value}
                checked={checked}
                onChange={(event) => {
                    setChecked(event.target.checked);
                    onChange(event);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                {...args}
            />
        </StyledWrapper>
    );
};

export const Default: StoryObj<StorySwitchProps> = {
    args: {
        label: 'Label',
        labelPosition: 'after',
        disabled: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
