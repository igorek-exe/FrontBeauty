export type MasterAboutProps = {
    aboutText: string;
    tempText: string;
    isEditing: boolean;
    onEdit: () => void;
    onChange: (value: string) => void;
    onSave: () => void;
    onCancel: () => void;
};
