import React from 'react';
import { MasterServices } from './UI/MasterServices';
import { useMasterServices } from './model/useMasterServices';

const MasterServicesContainer: React.FC = () => {
    const {
        services,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useMasterServices();

    return (
        <MasterServices
            services={services}
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

export { MasterServicesContainer };