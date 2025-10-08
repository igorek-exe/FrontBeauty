export type EducationItem = {
    title: string;
    year: string;
};

export type MasterEducationFormProps = {
    education: EducationItem[];
    onChange: (index: number, field: keyof EducationItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};
