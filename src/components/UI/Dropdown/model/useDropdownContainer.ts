import { useState, useEffect } from 'react';
import { useDropdown } from '@/hooks/useDropdown';
import { DropdownProps } from './dropdownTypes';

export const useDropdownContainer = ({
    buttonLabel,
    selectedLabel,
    onItemClick,
}: Pick<DropdownProps, 'buttonLabel' | 'selectedLabel' | 'onItemClick'>) => {
    const { open, toggle, ref } = useDropdown<HTMLDivElement>();
    const [label, setLabel] = useState(buttonLabel);

    useEffect(() => {
        if (selectedLabel) {
            setLabel(selectedLabel);
        } else {
            setLabel(buttonLabel);
        }
    }, [selectedLabel, buttonLabel]);

    const handleItemClick = (itemLabel: string) => {
        setLabel(itemLabel);
        onItemClick?.(itemLabel);
        toggle();
    };

    return {
        open,
        ref,
        label,
        toggle,
        handleItemClick,
    };
};
