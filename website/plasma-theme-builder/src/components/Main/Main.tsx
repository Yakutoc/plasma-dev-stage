import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BodyM } from '@salutejs/plasma-b2c';

import { AuthRequestModal } from '../AuthRequestModal/AuthRequestModal';
import { ThemeKindItem } from '../ThemeKindItem/ThemeKindItem';
import { BackwardButton } from '../BackwardButton/BackwardButton';

import { useGithubAuth } from '../../hooks';
import { clearURLParam } from '../../utils';
import type { ThemeKindItemProps } from '../ThemeKindItem/ThemeKindItem';

const StyledMain = styled.div``;

const Display = styled(BodyM)`
    margin-bottom: 2.5rem;
`;

const themeKindItems: Array<ThemeKindItemProps> = [
    {
        name: 'Цветовая\nсхема',
        description:
            'Семантический набор токенов, использует основную палитру в качестве источника, можно настроить под свой продукт',
        supportedPlatforms: [
            {
                name: 'Web',
                languages: 'CSS',
            },
            {
                name: 'React-Native',
                languages: 'TypeScript',
            },
            {
                name: 'iOS',
                languages: 'Swift',
            },
            {
                name: 'Android',
                languages: 'Compose, XML',
            },
        ],
    },
    {
        name: 'Типографи\u00ADческая схема',
        description: 'Семантический набор токенов, основанный на семействе SB Sans, поддерживает все архетипы Сбера',
        supportedPlatforms: [
            {
                name: 'Web',
                languages: 'CSS',
            },
            {
                name: 'React-Native',
                languages: 'TypeScript',
            },
            {
                name: 'iOS',
                languages: 'Swift',
            },
            {
                name: 'Android',
                languages: 'Compose',
            },
        ],
    },
    {
        name: 'Скругления',
        description: 'Семантический набор значений для радиусов скругления компонентов',
        supportedPlatforms: [
            {
                name: 'Web',
                languages: 'CSS',
            },
            {
                name: 'React-Native',
                languages: 'TypeScript',
            },
        ],
    },
    {
        name: 'Отступы',
        description: 'Семантический набор значений для используемых отступов',
        supportedPlatforms: [
            {
                name: 'Web',
                languages: 'CSS',
            },
            {
                name: 'React-Native',
                languages: 'TypeScript',
            },
        ],
    },
    {
        name: 'Тени',
        description: 'Семантический набор значений для используемых теней',
        supportedPlatforms: [
            {
                name: 'Web',
                languages: 'CSS',
            },
            {
                name: 'React-Native',
                languages: 'TypeScript',
            },
        ],
    },
];

interface MainProps {
    onGenerateTheme: () => void;
    onSetToken: (value: string) => void;
}

export const Main = ({ onGenerateTheme, onSetToken }: MainProps) => {
    const [opened, setIsOpen] = useState(false);
    const [token, getToken, getAuth] = useGithubAuth();

    const onBackwardClick = useCallback(() => {
        clearURLParam();
    }, []);

    useEffect(() => {
        getToken();
    }, [getToken]);

    useEffect(() => {
        if (token) {
            onSetToken(token);
        }
    }, [token, onSetToken]);

    const onAuthRequestModalOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onAuthRequestModalClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <StyledMain>
            <BackwardButton onBackwardClick={onBackwardClick} />
            <AuthRequestModal opened={opened} onClose={onAuthRequestModalClose} onGetAuth={getAuth} />
            <Display bold>Темы</Display>
            {themeKindItems.map(({ name, description, supportedPlatforms }, index) => (
                <ThemeKindItem
                    key={index}
                    index={index}
                    name={name}
                    description={description}
                    supportedPlatforms={supportedPlatforms}
                    onClick={token ? onGenerateTheme : onAuthRequestModalOpen}
                />
            ))}
        </StyledMain>
    );
};
