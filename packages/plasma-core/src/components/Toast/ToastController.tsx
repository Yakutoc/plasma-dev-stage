import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Fade } from '../Fade';
import { safeFlushSync } from '../../utils';

import { ToastInfo } from './Toast.types';
import { Toast, StyledRoot as ToastStyledRoot } from './Toast';
import { useToast } from './useToast';

const showAnimation = (position: string) => keyframes`
    0% {
        transform: translate(-50%, ${position === 'top' && '-'}5rem);
        opacity: 0;
    }

    80% {
        transform: translate(-50%, 0);
        opacity: 0.7;
    }

    100% {
        opacity: 1;
    }
`;
const hideAnimation = (position: string) => keyframes`
    0% {
        opacity: 1;
    }

    20% {
        transform: translate(-50%, 0);
        opacity: 0.7;
    }

    100% {
        transform: translate(-50%, ${position === 'top' && '-'}5rem);
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`;

const StyledFade = styled(Fade)<{ isVisible: boolean }>`
    ${({ isVisible }) => css`
        animation: 300ms ${isVisible ? fadeIn : fadeOut};
    `};
`;

const StyledRoot = styled.div<{ $position: string; isVisible: boolean; $offset?: number }>`
    position: fixed;
    left: 50%;
    z-index: 1000;
    transform: translateX(-50%);

    ${({ $position, isVisible, $offset = 0 }) => css`
        ${$position}: ${$offset + 5}rem;
        animation: 300ms ${isVisible ? showAnimation($position) : hideAnimation($position)};
    `};

    display: flex;
    width: 0;

    ${ToastStyledRoot} {
        transform: translateX(-50%);
        max-width: calc(100vw - 5rem);
        flex-shrink: 0;
    }
`;

/**
 * Создаёт <div />, который внутри себя содержит тост.
 * Цикл: show => timeout => hide.
 */
export const ToastController: React.FC<ToastInfo> = ({ role, text, contentLeft, position, timeout, fade, offset }) => {
    const { hideToast } = useToast();
    const [isVisible, setIsVisible] = useState(true);
    const hideTimeout = useRef<number | null>(null);
    const toastKey = `${text}${position}`;

    const animationEndHandler = useCallback(() => {
        if (!isVisible) {
            hideToast();
            safeFlushSync(() => {
                setIsVisible(true); // Необходимо вернуть булево к следующему вызову тоста
            });
        }
        if (isVisible) {
            hideTimeout.current = setTimeout(() => {
                setIsVisible(false);
            }, timeout);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeout, isVisible]);

    useEffect(() => {
        if (timeout === null && hideTimeout.current !== null) {
            clearTimeout(hideTimeout.current);
        }
    }, [timeout]);

    useEffect(() => {
        return () => {
            if (hideTimeout.current !== null) {
                clearTimeout(hideTimeout.current);
            }
        };
    }, []);

    if (!text || !position) {
        return null;
    }

    return (
        <>
            {fade && <StyledFade isVisible={isVisible} placement={position} />}
            <StyledRoot
                key={toastKey}
                $position={position}
                $offset={offset}
                isVisible={isVisible}
                onAnimationEnd={animationEndHandler}
            >
                <Toast role={role} text={text} contentLeft={contentLeft} />
            </StyledRoot>
        </>
    );
};
