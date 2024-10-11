import React, { useCallback, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconSber } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { PopupProvider } from '../Popup';

import {
    Notification,
    NotificationsProvider,
    NotificationIconPlacement,
    NotificationLayout,
    addNotification,
} from './Notification';

const titles = ['Выполнено', 'Внимание', 'Ошибка'];
const texts = ['SSH ключ успешно скопирован', 'Нельзя скопировать SSH ключ', 'Не удалось скопировать SSH ключ'];
const size = ['xs', 'xxs'];
const iconPlacement = ['top', 'left'];

const longText = `JavaScript frameworks are an essential part of modern front-end web development,
providing developers with proven tools for building scalable, interactive web applications.
`;

const getNotificationProps = (i: number) => ({
    title: titles[i % 3],
    children: texts[i % 3],
    size: size[i % 2],
    iconPlacement: iconPlacement[i % 2] as NotificationIconPlacement,
});

const placements = ['top', 'left'];

const meta: Meta<typeof Notification> = {
    title: 'Controls/Notification',
    decorators: [InSpacingDecorator],
};

export default meta;

interface StoryDefaultProps {
    title: string;
    children: string;
    showCloseIcon: boolean;
    showLeftIcon: boolean;
    layout: NotificationLayout;
    size: 'xs' | 'xxs';
    iconPlacement: NotificationIconPlacement;
}

const StoryDefault = ({ title, children, iconPlacement, size, layout, showLeftIcon, ...rest }: StoryDefaultProps) => {
    return (
        <Notification
            title={title}
            icon={showLeftIcon ? <IconSber /> : ''}
            iconPlacement={iconPlacement}
            actions={<Button text="text" size="s" stretch={layout === 'vertical' && size === 'xs'} />}
            size={size}
            layout={layout}
            {...rest}
        >
            {children}
        </Notification>
    );
};

export const Default: StoryObj<StoryDefaultProps> = {
    argTypes: {
        iconPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['xs', 'xxs'],
            control: {
                type: 'select',
            },
        },
        layout: {
            options: ['vertical'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['view']),
    },
    args: {
        title: 'Title',
        children: longText,
        showCloseIcon: true,
        showLeftIcon: true,
        iconPlacement: 'top',
        layout: 'vertical',
        size: 'xs',
    },
    render: (args) => <StoryDefault {...args} />,
};

type StoryLiveDemoProps = ComponentProps<typeof Notification> & {
    timeout: number;
    layout: NotificationLayout;
    size: 'xs' | 'xxs';
    iconPlacement: NotificationIconPlacement;
};

const StoryLiveDemo = ({ timeout, ...rest }: StoryLiveDemoProps) => {
    const count = useRef(0);
    const handleClick = useCallback(() => {
        addNotification({ icon: <IconSber />, ...rest, ...getNotificationProps(count.current) }, timeout);
        count.current++;
    }, [count, rest]);

    return (
        <NotificationsProvider>
            <Button text="Добавить уведомление" onClick={handleClick} />
        </NotificationsProvider>
    );
};

export const LiveDemo: StoryObj<StoryLiveDemoProps> = {
    argTypes: {
        layout: {
            options: ['vertical'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        timeout: 3000,
        role: 'alert',
        layout: 'vertical',
    },
    render: (args) => <StoryLiveDemo {...args} />,
};

type StoryWithModalProps = ComponentProps<typeof Notification> & {
    timeout: number;
};

const StoryWithModal = ({ timeout }: StoryWithModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const count = useRef(0);
    const handleClick = useCallback(() => {
        addNotification(getNotificationProps(count.current), timeout);
        count.current++;
    }, [count]);

    return (
        <NotificationsProvider>
            <PopupProvider>
                <Button text="Open modal" onClick={() => setIsModalOpen(true)} />
                <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div>Hello!</div>
                    <Button view="default" size="s" text="Add notification" onClick={handleClick} />
                </Modal>
            </PopupProvider>
        </NotificationsProvider>
    );
};

export const WithModal: StoryObj<StoryLiveDemoProps> = {
    args: {
        timeout: 3500,
    },
    render: (args) => <StoryWithModal {...args} />,
};
