import React from 'react';
import { MasterAbout } from './UI/MasterAbout';
import { useMasterAbout } from './model/useMasterAbout';

const MasterAboutContainer: React.FC = () => {
    const {
        aboutText,
        tempText,
        setTempText,
        isEditing,
        handleEdit,
        handleCancel,
        saveAbout,
    } = useMasterAbout();

    return (
        <MasterAbout
            aboutText={aboutText}
            tempText={tempText}
            isEditing={isEditing}
            onEdit={handleEdit}
            onChange={setTempText}
            onSave={saveAbout}
            onCancel={handleCancel}
        />
    );
};

export { MasterAboutContainer };