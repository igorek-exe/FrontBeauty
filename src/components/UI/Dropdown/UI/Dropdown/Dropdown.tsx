import React from 'react';
import { DropdownUI } from '../DropdownUI.tsx';
import { useDropdownContainer } from '../../model/useDropdownContainer.ts';
import type { DropdownProps } from '@/components';

export const Dropdown: React.FC<DropdownProps> = ({
    items,
    buttonLabel,
    selectedLabel,
    onItemClick,
    classNames,
    icon,
}) => {
    const { open, ref, label, toggle, handleItemClick } = useDropdownContainer({
        buttonLabel,
        selectedLabel,
        onItemClick,
    });

    return (
        <DropdownUI
            open={open}
            menuRef={ref}
            items={items}
            buttonLabel={label}
            onItemClick={handleItemClick}
            toggleDropdown={toggle}
            classNames={classNames}
            icon={icon}
        />
    );
};
