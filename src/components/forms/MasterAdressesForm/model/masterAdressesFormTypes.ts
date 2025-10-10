export type AddressItem = {
    address: string;
    region: string;
};

export type UseMasterAdressesFormReturn = {
    addresses: AddressItem[];
    handleChange: (index: number, field: keyof AddressItem, value: string) => void;
    handleAdd: () => void;
    handleRemove: (index: number) => void;
    handleSave: () => void;
    handleCancel: () => void;
};
