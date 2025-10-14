import React, { RefObject } from 'react';
import { cn } from '@/utils/UI/cn.ts';
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
    icon?: React.ReactNode;
};

export const DropdownUI: React.FC<DropdownUIProps> = ({
    open,
    menuRef,
    items,
    buttonLabel,
    onItemClick,
    toggleDropdown,
    classNames = {},
    icon,
}) => {
    return (
        <div ref={menuRef} className={cn(styles, 'dropMenuWrap', classNames.wrapper)}>
            <button type="button" onClick={toggleDropdown} className={cn(styles, 'dropMenuBtn', classNames.button)}>
                <span>{buttonLabel}</span>
                {icon}
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
