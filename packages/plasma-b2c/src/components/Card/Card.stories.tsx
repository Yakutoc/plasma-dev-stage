import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';
import { blackPrimary, surfaceSolid03, whitePrimary, whiteSecondary } from '@salutejs/plasma-tokens-b2c';
import { IconStarFill } from '@salutejs/plasma-icons';
import { additional } from '@salutejs/plasma-colors';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { BodyM, H4 } from '../Typography';
import { Cell } from '../Cell';

import { Card, CardBody, CardBadge, CardContent, CardMedia } from '.';
import type { CardProps } from '.';

const roundList = [250, 32, 28, 24, 20, 18, 16, 14, 12, 8, 0] as const;

const ratios = ['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1'] as const;

const meta: Meta<StoryCardProps> = {
    title: 'Data Display/Card',
    decorators: [InSpacingDecorator],
    component: Card,
    argTypes: {
        ratio: {
            options: ratios,
            control: {
                type: 'select',
            },
        },
        roundness: {
            options: roundList,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryCardProps = CardProps & {
    label: string;
    coverGradient: boolean;
    title: string;
    rating: string;
    description: string;
    ratio: typeof ratios[number];
};

type Story = StoryObj<StoryCardProps>;

const StyledCardBadge = styled(CardBadge)`
    border-radius: 1rem;
    background-color: ${whitePrimary};
    color: ${blackPrimary};

    left: 1.25rem;
    top: 1rem;
`;

const StyledBodyM = styled(BodyM)`
    color: ${whiteSecondary};
`;

const StyledH4 = styled(H4)`
    margin: 0.25rem 0;

    color: ${whitePrimary};
`;

const StyledDescription = styled.div`
    display: flex;
    align-items: center;
`;

const StyledIconStarFill = styled(IconStarFill)`
    transform: scale(0.75);
`;

const StyledCellRating = styled(Cell)`
    color: ${additional.h40[300]};
    margin-right: 0.75rem;
`;

const StoryConfigDefault: Story = {
    args: {
        ratio: '1/1',
        roundness: 20,
        outlined: true,
        scaleOnFocus: true,
        label: 'Потребительский кредит',
        rating: '4.7',
        title: 'до 230 000 ₽',
        description: 'На 18 месяцев, ставка 13,9%',
    },
};

export const Default: Story = {
    ...StoryConfigDefault,
    render: (args) => {
        const { outlined, scaleOnFocus, roundness, label, title, description, rating, ratio } = args;

        return (
            <Card
                style={{ width: '22.5rem' }}
                tabIndex={0}
                outlined={outlined}
                scaleOnFocus={scaleOnFocus}
                roundness={roundness}
            >
                <CardBody>
                    <CardMedia src="./images/320_320_0.jpg" placeholder="./images/320_320_1.jpg" ratio={ratio} />
                    <StyledCardBadge size="l" text="60 минут" />
                    <CardContent>
                        <BodyM>{label}</BodyM>
                        <H4>{title}</H4>
                        <StyledDescription>
                            <StyledCellRating
                                content={<StyledIconStarFill color={additional.h40[300]} />}
                                description={rating}
                            />
                            <BodyM>{description}</BodyM>
                        </StyledDescription>
                    </CardContent>
                </CardBody>
            </Card>
        );
    },
};

export const WithBackground: Story = {
    ...StoryConfigDefault,
    render: ({ outlined, scaleOnFocus, roundness, label, title, description, rating, ratio }) => {
        return (
            <Card
                style={{ width: '22.5rem' }}
                tabIndex={0}
                outlined={outlined}
                scaleOnFocus={scaleOnFocus}
                roundness={roundness}
                background={surfaceSolid03}
            >
                <CardBody>
                    <CardMedia src="./images/320_320_0.jpg" placeholder="./images/320_320_1.jpg" ratio={ratio} />
                    <StyledCardBadge size="l" text="60 минут" />
                    <CardContent>
                        <BodyM>{label}</BodyM>
                        <H4>{title}</H4>
                        <StyledDescription>
                            <StyledCellRating
                                content={<StyledIconStarFill color={additional.h40[300]} />}
                                description={rating}
                            />
                            <BodyM>{description}</BodyM>
                        </StyledDescription>
                    </CardContent>
                </CardBody>
            </Card>
        );
    },
};

export const WithCover: Story = {
    args: {
        ...StoryConfigDefault.args,
        coverGradient: true,
    },
    render: ({ outlined, scaleOnFocus, label, title, description, rating, ratio, roundness, coverGradient }) => {
        return (
            <Card
                style={{ width: '22.5rem' }}
                tabIndex={0}
                outlined={outlined}
                scaleOnFocus={scaleOnFocus}
                roundness={roundness}
            >
                <CardBody>
                    <CardMedia src="./images/320_320_0.jpg" placeholder="./images/320_320_1.jpg" ratio={ratio} />
                    <StyledCardBadge size="l" text="60 минут" />
                    <CardContent cover coverGradient={coverGradient}>
                        <StyledBodyM>{label}</StyledBodyM>
                        <StyledH4>{title}</StyledH4>
                        <StyledDescription>
                            <StyledCellRating
                                content={<StyledIconStarFill color={additional.h40[300]} />}
                                description={rating}
                            />
                            <StyledBodyM>{description}</StyledBodyM>
                        </StyledDescription>
                    </CardContent>
                </CardBody>
            </Card>
        );
    },
};
