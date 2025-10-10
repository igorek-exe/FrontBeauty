import React from 'react';
import { DropdownUI } from './UI/DropdownUI';
import { useDropdownContainer } from './model/useDropdownContainer';
import { DropdownProps } from './model/dropdownTypes';

const Dropdown: React.FC<DropdownProps> = ({
    items,
    buttonLabel,
    selectedLabel,
    onItemClick,
    classNames,
    iconName,
    iconClassName,
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
            iconName={iconName}
            iconClassName={iconClassName}
        />
    );
};

export { Dropdown };
