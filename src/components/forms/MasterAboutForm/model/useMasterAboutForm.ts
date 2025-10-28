import { useState } from 'react';
import type { UseMasterAboutFormReturn } from '@/components/forms/MasterAboutForm/index.model.ts';

export const useMasterAboutForm = (initialValue: string): UseMasterAboutFormReturn => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    const handleSave = (onSave: (text: string) => void) => {
        onSave(value);
    };

    const handleCancel = (onCancel: () => void) => {
        onCancel();
    };

    return { value, handleChange, handleSave, handleCancel };
};
