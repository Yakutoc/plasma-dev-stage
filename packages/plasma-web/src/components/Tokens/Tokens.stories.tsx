import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { plasma_web__dark, plasma_web__light } from '@salutejs/plasma-themes/es/themes';
import { InSpacingDecorator, getGroupedTokens } from '@salutejs/plasma-sb-utils';

import { Accordion } from '../Accordion';
import { ShowToastArgs, ToastProvider, useToast } from '../Toast';

import {
    AccordionInfo,
    Category,
    CategoryContainer,
    ColorCircle,
    ColumnTitle,
    OpacityPart,
    StyledAccordionItem,
    Subcategory,
    TokenInfo,
    TokenInfoWrapper,
} from './Tokens.styles';

const meta: Meta = {
    title: 'Colors',
    decorators: [InSpacingDecorator],
};

export default meta;

const getThemes = (theme) => {
    switch (theme) {
        case 'b2b:light':
        case 'b2c:light':
        case 'light (legacy)':
            return getGroupedTokens(plasma_web__light[0]);
        default:
            return getGroupedTokens(plasma_web__dark[0]);
    }
};

const StoryDemo = ({ context }) => {
    const groupedTokens = getThemes(context.globals.theme);
    const { showToast } = useToast();
    const toastData = {
        view: 'default',
        size: 'm',
        hasClose: true,
        fade: false,
        position: 'bottom',
        offset: 0,
        timeout: 3000,
        role: 'alert',
    } as ShowToastArgs;

    const copyToClipboard = async (value: string, opacity?: string | null) => {
        try {
            await navigator.clipboard.writeText(value + (opacity || ''));

            showToast({
                ...toastData,
                text: 'Скопировано',
            });
        } catch (err) {
            showToast({
                ...toastData,
                text: 'Ошибка при копировании текста',
            });
        }
    };

    if (!groupedTokens) {
        return null;
    }

    return (
        <>
            {Object.entries(groupedTokens).map(([category, value]) => (
                <CategoryContainer key={category}>
                    <Category>{category}</Category>
                    <Accordion view="clear" size="s" stretching="filled" defaultActiveEventKey={[0]}>
                        {Object.entries(value).map(([subcategory, value2], index) => (
                            <StyledAccordionItem
                                key={subcategory}
                                eventKey={index}
                                type="arrow"
                                title={
                                    <AccordionInfo>
                                        <Subcategory>{subcategory}/</Subcategory>
                                        <ColumnTitle className="color">
                                            <ColorCircle disableShadow />
                                            Color
                                        </ColumnTitle>
                                        <ColumnTitle>Opacity</ColumnTitle>
                                    </AccordionInfo>
                                }
                            >
                                <TokenInfoWrapper>
                                    {Object.entries(value2).map(([token, { value: value3, opacity }]) => (
                                        <AccordionInfo key={token}>
                                            <TokenInfo className="copy" onClick={() => copyToClipboard(token)}>
                                                {token}
                                            </TokenInfo>
                                            <TokenInfo
                                                className="color copy"
                                                onClick={() => copyToClipboard(value3, opacity?.alpha)}
                                            >
                                                <ColorCircle background={value3} />
                                                <div>
                                                    {value3.includes('gradient') ? 'Градиент' : value3}
                                                    {opacity && <OpacityPart>{opacity.alpha}</OpacityPart>}
                                                </div>
                                            </TokenInfo>
                                            {opacity && (
                                                <TokenInfo className="opacity">{opacity.parsedAlpha}</TokenInfo>
                                            )}
                                        </AccordionInfo>
                                    ))}
                                </TokenInfoWrapper>
                            </StyledAccordionItem>
                        ))}
                    </Accordion>
                </CategoryContainer>
            ))}
        </>
    );
};

export const Default: StoryObj = {
    render: (_, context) => (
        <ToastProvider>
            <StoryDemo context={context} />
        </ToastProvider>
    ),
};
