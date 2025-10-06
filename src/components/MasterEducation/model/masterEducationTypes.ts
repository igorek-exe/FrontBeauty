export type EducationItem = {
    title: string;
    year: string;
};

export type MasterEducationProps = {
    education: EducationItem[];
    isEditing: boolean;
    onEdit: () => void;
    onChange: (index: number, field: keyof EducationItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};
