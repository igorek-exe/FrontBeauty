import React from 'react';
import { MasterEducation } from './UI/MasterEducation';
import { useMasterEducation } from './model/useMasterEducation';

const MasterEducationContainer: React.FC = () => {
    const {
        education,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useMasterEducation();

    return (
        <MasterEducation
            education={education}
            isEditing={isEditing}
            onEdit={handleEdit}
            onChange={handleChange}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
};

export { MasterEducationContainer };
