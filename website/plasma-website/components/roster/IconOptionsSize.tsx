import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { AnimationSlideUp } from './AnimationSlideUp';

type IconOptionsSizeProps = {
    onChange: (value: string) => void;
    defaultSize: string;
};

const options = [
    { value: 'xs', label: '16' },
    { value: 's', label: '24' },
    { value: 'm', label: '36' },
];

const StyledOptions = styled.div`
    display: flex;
    gap: 0.125rem;
`;

const StyledOptionInfo = styled.span`
    position: absolute;
    top: -2.375rem;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2rem;
    padding: 0.563rem 0.5rem;
    border-radius: 1.75rem;
    background-color: rgba(23, 23, 23, 1);

    box-sizing: border-box;

    ${AnimationSlideUp};
`;

const StyledOption = styled.div<{ isActive?: boolean; isXS?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.313rem 0.5rem;
    width: 1.5rem;
    max-height: 1.5rem;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: rgba(255, 255, 255, 0.56);
    border-radius: 50%;

    box-sizing: border-box;

    cursor: pointer;

    transition: color 120ms ease-in, background-color 120ms ease-in, border-radius 120ms ease-in;

    &:hover {
        color: rgba(255, 255, 255, 0.96);
        background-color: rgba(255, 255, 255, 0.06);
        border-radius: 50%;

        ${StyledOptionInfo} {
            display: flex;
        }
    }

    ${({ isActive }) =>
        isActive &&
        css`
            color: rgba(255, 255, 255, 0.96);
            background-color: rgba(255, 255, 255, 0.06);

            cursor: default;

            &:hover {
                background-color: rgba(255, 255, 255, 0.06);
            }
        `}

    ${({ isXS }) =>
        isXS &&
        css`
            width: 2rem;
            border-radius: 0.75rem;

            &:hover {
                border-radius: 0.75rem;
            }
        `}
`;

export const IconOptionsSize = ({ onChange, defaultSize }: IconOptionsSizeProps) => {
    const [currentSizeOption, setCurrentSizeOption] = useState<string>(defaultSize);

    return (
        <StyledOptions>
            {options.map(({ value, label }) => {
                return (
                    <StyledOption
                        key={label}
                        isXS={value === 'xs'}
                        isActive={currentSizeOption === value}
                        onClick={() => {
                            setCurrentSizeOption(value);
                            onChange(value);
                        }}
                    >
                        <StyledOptionInfo>{label}</StyledOptionInfo>
                        <span>{value}</span>
                    </StyledOption>
                );
            })}
        </StyledOptions>
    );
};
