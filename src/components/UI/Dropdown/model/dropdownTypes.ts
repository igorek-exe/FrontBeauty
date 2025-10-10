export type ClassNames = {
    wrapper?: string;
    button?: string;
    list?: string;
    item?: string;
};

export type DropdownProps = {
    items: string[];
    buttonLabel: string;
    selectedLabel?: string | null;
    onItemClick?: (label: string) => void;
    classNames?: ClassNames;
    iconName?: string;
    iconClassName?: string;
};
