import { useState } from 'react';
import type { AddressItem, UseMasterAdressesFormReturn } from '@/components';

export const useMasterAdressesForm = (): UseMasterAdressesFormReturn => {
    const [addresses, setAddresses] = useState<AddressItem[]>([{ address: '', region: '' }]);

    const handleChange = (index: number, field: keyof AddressItem, value: string) => {
        const updated = [...addresses];
        updated[index][field] = value;
        setAddresses(updated);
    };

    const handleAdd = () => {
        setAddresses((prev) => [...prev, { address: '', region: '' }]);
    };

    const handleRemove = (index: number) => {
        setAddresses((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        console.log('Сохранено:', addresses);
    };

    const handleCancel = () => {
        console.log('Отмена изменений');
    };

    return {
        addresses,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
        handleCancel,
    };
};
