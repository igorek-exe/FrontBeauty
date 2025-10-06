import React from 'react';
import { MasterExperience } from './UI/MasterExperience';
import { useMasterExperience } from './model/useMasterExperience';

type Props = {
    index?: number;
};

const MasterExperienceContainer: React.FC<Props> = ({ index = 0 }) => {
    const {
        experience,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useMasterExperience(index);

    return (
        <MasterExperience
            experience={experience}
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

export { MasterExperienceContainer };