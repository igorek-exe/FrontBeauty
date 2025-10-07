import React from 'react';

export type ProfileFormData = {
    name: string;
    email: string;
    phone: string;
};

export type ProfileEditFormProps = {
    formData: ProfileFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    onCancel: () => void;
};
