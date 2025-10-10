import React, { RefObject } from 'react';
import { IconSprite } from '@/components';
import { cn } from '@/utils/cn';
import styles from './index.module.scss';
import { ClassNames } from '../model/dropdownTypes';

type DropdownUIProps = {
    open: boolean;
    menuRef: RefObject<HTMLDivElement>;
    items: string[];
    buttonLabel: string;
    onItemClick: (label: string) => void;
    toggleDropdown: () => void;
    classNames?: ClassNames;
    iconName?: string;
    iconClassName?: string;
};

export const DropdownUI: React.FC<DropdownUIProps> = ({
    open,
    menuRef,
    items,
    buttonLabel,
    onItemClick,
    toggleDropdown,
    classNames = {},
    iconName,
    iconClassName,
}) => {
    return (
        <div ref={menuRef} className={cn(styles, 'dropMenuWrap', classNames.wrapper)}>
            <button type="button" onClick={toggleDropdown} className={cn(styles, 'dropMenuBtn', classNames.button)}>
                <span>{buttonLabel}</span>
                <IconSprite name={iconName} classNames={{ iconClass: iconClassName }} />
            </button>

            {open && (
                <ul className={cn(styles, 'dropMenuList', classNames.list)}>
                    {items.map((label, index) => (
                        <li
                            key={index}
                            className={cn(styles, 'dropMenuItem', classNames.item)}
                            onClick={() => onItemClick(label)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
