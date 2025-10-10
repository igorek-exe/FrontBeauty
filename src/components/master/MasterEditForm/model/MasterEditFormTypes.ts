import React from 'react';

export type MasterFormData = {
    name: string;
    email: string;
    phone: string;
};

export type MasterEditFormProps = {
    formData: MasterFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    onCancel: () => void;
};
