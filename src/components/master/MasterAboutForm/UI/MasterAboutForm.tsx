import React from 'react';

type MasterAboutFormProps = {
    value: string;
    onChange: (value: string) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAboutForm: React.FC<MasterAboutFormProps> = ({ value, onChange, onSave, onCancel }) => {
    return (
        <div>
            <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={6} />
            <div>
                <button onClick={onSave}>Сохранить</button>
                <button onClick={onCancel}>Отмена</button>
            </div>
        </div>
    );
};

export { MasterAboutForm };
