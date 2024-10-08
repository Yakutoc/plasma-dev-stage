import React, { useEffect, useRef, useState, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useForkRef, useUniqId } from '../../hooks';

import { PopupAnimationInfo, PopupBaseProps } from './types';
import { POPOVER_PORTAL_ID } from './PopupBaseContext';
import { PopupBaseRoot } from './PopupBaseRoot';
import { usePopup } from './hooks';
import { endAnimationClass, endTransitionClass } from './utils';

const StyledPortal = styled.div``;

export const getClassName = (animationInfo: PopupAnimationInfo, className?: string) => {
    const endAnimation = animationInfo?.endAnimation ? endAnimationClass : '';
    const endTransition = animationInfo?.endTransition ? endTransitionClass : '';
    return [className, endAnimation, endTransition].filter(Boolean).join(' ');
};

/**
 * Базовый копмонент PopupBase.
 */
export const PopupBase = forwardRef<HTMLDivElement, PopupBaseProps>(
    (
        {
            id,
            isOpen,
            opened,
            placement = 'center',
            offset = [0, 0],
            frame = 'document',
            children,
            overlay,
            role,
            zIndex,
            popupInfo,
            withAnimation = false,
            className,
            ...rest
        },
        ref,
    ) => {
        const innerIsOpen = Boolean(isOpen || opened);

        const uniqId = useUniqId();
        const innerId = id || uniqId;

        const { isVisible, animationInfo, setVisible } = usePopup({
            isOpen: innerIsOpen,
            id: innerId,
            popupInfo,
            withAnimation,
        });

        const portalRef = useRef<HTMLElement | null>(null);
        const contentRef = useRef<HTMLDivElement | null>(null);

        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

        const [, forceRender] = useState(false);

        useEffect(() => {
            let portal = document.getElementById(POPOVER_PORTAL_ID);

            if (typeof frame !== 'string' && frame && frame.current) {
                portal = frame.current;
            }

            if (!portal) {
                portal = document.createElement('div');
                portal.setAttribute('id', POPOVER_PORTAL_ID);

                if (typeof frame === 'string' && frame !== 'document') {
                    document.getElementById(frame)?.appendChild(portal);
                } else {
                    document.body.appendChild(portal);
                }
            }

            portalRef.current = portal;

            /**
             * Изменение стейта нужно для того, чтобы Popup
             * отобразился после записи DOM элемента в portalRef.current
             */
            forceRender(true);
        }, []);

        if (!isVisible && !innerIsOpen) {
            return null;
        }

        return (
            <>
                {portalRef.current &&
                    ReactDOM.createPortal(
                        <StyledPortal className={getClassName(animationInfo, className)} {...rest}>
                            {overlay}
                            <PopupBaseRoot
                                id={innerId}
                                ref={innerRef}
                                placement={placement}
                                frame={frame}
                                offset={offset}
                                zIndex={zIndex}
                                animationInfo={animationInfo}
                                setVisible={setVisible}
                            >
                                {children}
                            </PopupBaseRoot>
                        </StyledPortal>,
                        portalRef.current,
                    )}
            </>
        );
    },
);
