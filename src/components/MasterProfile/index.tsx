import React from 'react';
import { MasterProfileCard } from './UI/MasterProfileCard';
import { useMasterProfile } from './model/useMasterProfile';

type MasterProfileContainerProps = {
    photoUrl?: string;
};

const MasterProfileContainer: React.FC<MasterProfileContainerProps> = ({ photoUrl }) => {
    const { user, formData, isEditing, handleChange, handleEdit, handleSave, handleCancel } = useMasterProfile();

    return (
        <MasterProfileCard
            photoUrl={photoUrl}
            user={user}
            formData={formData}
            isEditing={isEditing}
            onChange={handleChange}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
};

export { MasterProfileContainer };
