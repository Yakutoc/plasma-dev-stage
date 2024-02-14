import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { styled } from '@linaria/react';

import { tabsConfig } from '../../../../components/Tabs';
import { mergeConfig } from '../../../../engines';
import { argTypesFromConfig, WithTheme } from '../../../_helpers';
import { IconMic } from '../../../../components/_Icon';

import { config } from './Tabs.config';
import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

const tabItemViews = ['clear', 'default', 'divider', 'secondary'];

type CustomStoryTabsProps = {
    tabItemView: string;
    itemsNumber?: number;
    animated?: boolean;
    label?: string;
    showLeftContent: boolean;
    showRightContent: boolean;
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;

const meta: Meta<StoryTabsProps> = {
    title: 'plasma_b2c/Tabs',
    component: Tabs,
    decorators: [WithTheme],
    argTypes: {
        ...argTypesFromConfig(mergeConfig(tabsConfig, config)),
        tabItemView: {
            options: tabItemViews,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryTabsProps) => {
    const {
        itemsNumber,
        label,
        view,
        disabled,
        stretch,
        pilled,
        animated,
        tabItemView,
        size,
        showLeftContent,
        showRightContent,
    } = props;
    const items = Array(itemsNumber).fill(0);
    const secondItems = Array(10).fill(0);
    const [index, setIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const [thirdIndex, setThirdIndex] = useState(0);

    return (
        <>
            <h3>Tabs with auto width</h3>
            <Tabs view={view} stretch={stretch} pilled={pilled} disabled={disabled} size={size}>
                {items.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        animated={animated}
                        contentLeft={showLeftContent && <IconMic size="xs" color="inherit" />}
                        contentRight={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>

            <h3>Tabs with fixed width</h3>
            <Tabs
                view={view}
                stretch={stretch}
                pilled={pilled}
                disabled={disabled}
                size={size}
                style={{ width: '28.5rem' }}
            >
                {secondItems.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        selected={i === secondIndex}
                        onClick={() => !disabled && setSecondIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        animated={animated}
                        contentLeft={showLeftContent && <IconMic size="xs" color="inherit" />}
                        contentRight={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>

            <h3>Tabs with arrow navigation</h3>
            <Tabs view={view} index={thirdIndex} stretch={stretch} pilled={pilled} disabled={disabled} size={size}>
                {items.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        selected={i === thirdIndex}
                        itemIndex={i}
                        onIndexChange={(i) => setThirdIndex(i)}
                        onClick={() => !disabled && setThirdIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        animated={animated}
                        contentLeft={showLeftContent && <IconMic size="xs" color="inherit" />}
                        contentRight={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>
        </>
    );
};

export const Default: StoryObj<StoryTabsProps> = {
    args: {
        size: 'xs',
        itemsNumber: 4,
        tabItemView: 'default',
        disabled: false,
        stretch: false,
        pilled: false,
        animated: true,
        view: 'filled',
        label: 'Label',
        showLeftContent: false,
        showRightContent: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StyledMultipleContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;

const StoryMultiple = ({
    itemsNumber,
    label,
    view,
    disabled,
    stretch,
    pilled,
    animated,
    tabItemView,
    size,
    showLeftContent,
    showRightContent,
}: StoryTabsProps) => {
    const items = Array(itemsNumber).fill(0);

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    return (
        <StyledMultipleContainer>
            <Tabs
                view={view}
                index={index1}
                stretch={stretch}
                pilled={pilled}
                disabled={disabled}
                size={size}
                style={{ width: '12rem' }}
            >
                {items.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        selected={i === index1}
                        itemIndex={i}
                        onIndexChange={(i) => setIndex1(i)}
                        onClick={() => !disabled && setIndex1(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        animated={animated}
                        contentLeft={showLeftContent && <IconMic size="xs" color="inherit" />}
                        contentRight={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>
            <Tabs
                view={view}
                index={index2}
                stretch={stretch}
                pilled={pilled}
                disabled={disabled}
                size={size}
                style={{ width: '12rem' }}
            >
                {items.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        selected={i === index2}
                        itemIndex={i}
                        onIndexChange={(i) => setIndex2(i)}
                        onClick={() => !disabled && setIndex2(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        animated={animated}
                        contentLeft={showLeftContent && <IconMic size="xs" color="inherit" />}
                        contentRight={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>
        </StyledMultipleContainer>
    );
};

export const Multiple: StoryObj<StoryTabsProps> = {
    args: {
        size: 'xs',
        itemsNumber: 6,
        tabItemView: 'secondary',
        disabled: false,
        stretch: false,
        pilled: false,
        animated: true,
        view: 'filled',
        label: 'Label',
        showLeftContent: false,
        showRightContent: false,
    },
    render: (args) => <StoryMultiple {...args} />,
};
