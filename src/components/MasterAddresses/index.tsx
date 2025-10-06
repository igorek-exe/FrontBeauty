import React from 'react';
import { MasterAddresses } from './UI/MasterAddresses';
import { useMasterAddresses } from './model/useMasterAddresses';

const MasterAddressesContainer: React.FC = () => {
    const {
        addresses,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useMasterAddresses();

    return (
        <MasterAddresses
            addresses={addresses}
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

export  { MasterAddressesContainer }