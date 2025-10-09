import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateProfile } from '@/stores/slices/masterSlice';
import { UserProfile } from './masterProfileTypes';

export const useMasterProfile = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.master);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<UserProfile>({
        name: user.name,
        email: user.email,
        phone: user.phone,
    });

    useEffect(() => {
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
        });
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        dispatch(updateProfile(formData));
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
        });
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return {
        user,
        formData,
        isEditing,
        handleChange,
        handleEdit,
        handleSave,
        handleCancel,
    };
};
