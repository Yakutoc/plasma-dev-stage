import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { TextArea } from '.';
import type { TextAreaProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<TextAreaProps> = {
    title: 'Controls/TextArea',
    component: TextArea,
    decorators: [InSpacingDecorator],
    argTypes: {
        requiredPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
        },
        required: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'optional', truthy: false },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'required', truthy: false },
        },
        status: {
            options: ['', 'success', 'warning', 'error'],
            control: {
                type: 'select',
            },
        },
        cols: {
            control: {
                type: 'number',
            },
        },
        rows: {
            control: {
                type: 'number',
            },
        },
        labelPlacement: {
            options: ['inner', 'outer'],
            control: {
                type: 'select',
            },
        },
        ...disableProps([
            'helperBlock',
            '$isFocused',
            'contentRight',
            'autoComplete',
            'autoFocus',
            'dirName',
            'form',
            'minLength',
            'maxLength',
            'name',
            'value',
            'wrap',
            'theme',
            'as',
            'forwardedAs',
            'onChange',
            'onFocus',
            'onBlur',
        ]),
    },
    args: {
        autoResize: false,
        minAuto: 0,
        maxAuto: 0,
    },
};

export default meta;

type StoryProps = TextAreaProps & { enableContentRight: boolean; id?: string };

type Story = StoryObj<StoryProps>;

const StoryDefault = ({ status, enableContentRight, ...rest }: StoryProps) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <TextArea
            resize="none"
            value={value}
            contentRight={enableContentRight ? <IconPlaceholder /> : undefined}
            status={status || undefined}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

export const Default: Story = {
    args: {
        id: 'example-textarea',
        placeholder: 'Заполните многострочное поле',
        label: 'Label',
        leftHelper: 'Подсказка к полю',
        rightHelper: '125 слов',
        enableContentRight: true,
        status: '' as 'success',
        disabled: false,
        size: 'm',
        optional: false,
        required: false,
        requiredPlacement: 'right',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryLive = ({ status, ...rest }: StoryProps) => {
    const [value, setValue] = React.useState('');
    const l = value.length;
    const max = 140;

    return (
        <TextArea
            value={value}
            status={max <= l ? 'error' : ('' as 'success')}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            rightHelper={`${max - l} символов`}
            {...rest}
        />
    );
};

export const Live: Story = {
    args: {
        placeholder: 'Placeholder text',
        label: 'Label',
        leftHelper: 'Helper text',
        disabled: false,
    },
    render: (args) => <StoryLive {...args} />,
};
