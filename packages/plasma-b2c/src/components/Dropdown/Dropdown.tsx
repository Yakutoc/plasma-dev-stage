import React, { FC, SyntheticEvent, useState } from 'react';
import {
    dropdownConfig,
    dropdownItemConfig,
    component,
    mergeConfig,
    dropdownTokens,
} from '@salutejs/plasma-new-hope/styled-components';
import { DropdownProps, DropdownNodeType } from '@salutejs/plasma-hope';
import styled from 'styled-components';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
const DropdownNewHope = component(mergedConfig);

const mergedItemConfig = mergeConfig(dropdownItemConfig);
export const DropdownNewHopeItem = component(mergedItemConfig);

const StyledContent = styled.div`
    display: inline-flex;
    margin-right: 0.375rem;
`;

const DropdownItem: FC<{
    item: DropdownNodeType;
    index: number;
    handleClick: (item: DropdownNodeType, event: SyntheticEvent) => void;
    handleOnHover: (index: number) => void;
    itemRole?: string;
}> = ({ item, index, itemRole, handleClick, handleOnHover }) => (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <DropdownNewHopeItem
        key={item.value}
        value={item.value}
        onClick={(e) => handleClick(item, e)}
        onMouseOver={() => handleOnHover(index)}
        role={itemRole}
        disabled={item.isDisabled}
        contentLeft={<StyledContent>{item.contentLeft}</StyledContent>}
        text={item.label}
        style={{ color: item.color }}
    />
);

const DropdownInner: FC<
    Pick<
        DropdownProps,
        | 'children'
        | 'items'
        | 'trigger'
        | 'role'
        | 'closeOnSelect'
        | 'onItemClick'
        | 'onItemSelect'
        | 'itemRole'
        | 'onHover'
    > & { onGlobalClose: () => void }
> = ({
    children,
    trigger,
    closeOnSelect = true,
    onItemClick,
    onItemSelect,
    items,
    itemRole,
    onHover,
    onGlobalClose,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (currentState: boolean, _: Event | SyntheticEvent<Element, Event>): void => {
        setIsOpen(currentState);
    };

    const handleOnHover = (index: number): void => {
        if (onHover) {
            onHover(index);
        }
    };

    const handleClick = (item: DropdownNodeType, event: SyntheticEvent): void => {
        if (onItemClick) {
            onItemClick(item, event);
        }

        if (onItemSelect) {
            onItemSelect(item, event);
        }

        if (closeOnSelect) {
            onGlobalClose();
        }
    };

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <DropdownNewHope target={children} isOpen={isOpen} onToggle={handleToggle} trigger={trigger} placement="right">
            {items.map((item, index) =>
                item.items ? (
                    <DropdownInner items={item.items} trigger="hover" role={itemRole} onGlobalClose={onGlobalClose}>
                        <DropdownItem
                            item={item}
                            index={index}
                            itemRole={itemRole}
                            handleOnHover={handleOnHover}
                            handleClick={handleClick}
                        />
                    </DropdownInner>
                ) : (
                    <DropdownItem
                        item={item}
                        index={index}
                        itemRole={itemRole}
                        handleOnHover={handleOnHover}
                        handleClick={handleClick}
                    />
                ),
            )}
        </DropdownNewHope>
    );
};

export const Dropdown: FC<DropdownProps> = ({
    children,
    trigger,
    placement,
    disabled,
    closeOnSelect = true,
    onToggle,
    onItemClick,
    onItemSelect,
    listOverflow,
    listHeight,
    items,
    itemRole,
    onHover,
    style = {},
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (currentState: boolean, event: Event | SyntheticEvent<Element, Event>): void => {
        setIsOpen(currentState);

        if (onToggle) {
            onToggle(currentState, event);
        }
    };

    const handleOnHover = (index: number): void => {
        if (onHover) {
            onHover(index);
        }
    };

    const handleClick = (item: DropdownNodeType, event: SyntheticEvent): void => {
        if (onItemClick) {
            onItemClick(item, event);
        }

        if (onItemSelect) {
            onItemSelect(item, event);
        }

        if (closeOnSelect) {
            setIsOpen(false);
        }
    };

    if (listHeight) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style[dropdownTokens.height] = listHeight;
    }

    if (listOverflow) {
        style.overflow = 'hidden';
    }

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <DropdownNewHope
            {...rest}
            target={children}
            isOpen={isOpen}
            onToggle={handleToggle}
            trigger={trigger}
            placement={placement}
            style={style}
        >
            {!disabled &&
                items.map((item, index) =>
                    item.items ? (
                        <DropdownInner
                            items={item.items}
                            trigger="hover"
                            itemRole={itemRole}
                            closeOnSelect={closeOnSelect}
                            onItemClick={onItemClick}
                            onItemSelect={onItemSelect}
                            onHover={onHover}
                            onGlobalClose={() => setIsOpen(false)}
                        >
                            <DropdownItem
                                item={item}
                                index={index}
                                itemRole={itemRole}
                                handleOnHover={handleOnHover}
                                handleClick={handleClick}
                            />
                        </DropdownInner>
                    ) : (
                        <DropdownItem
                            item={item}
                            index={index}
                            itemRole={itemRole}
                            handleOnHover={handleOnHover}
                            handleClick={handleClick}
                        />
                    ),
                )}
        </DropdownNewHope>
    );
};
