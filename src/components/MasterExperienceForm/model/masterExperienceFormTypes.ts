export type ExperienceItem = {
    title: string;
    yearStart: string;
    yearEnd: string;
};

export type MasterExperienceFormProps = {
    experience: ExperienceItem[];
    onChange: (index: number, field: keyof ExperienceItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};
