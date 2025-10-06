export type AddressItem = {
    address: string;
    region: string;
};

export type MasterAddressesProps = {
    addresses: AddressItem[];
    isEditing: boolean;
    onEdit: () => void;
    onChange: (index: number, field: keyof AddressItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};
