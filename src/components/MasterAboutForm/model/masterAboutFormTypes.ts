export type UseMasterAboutFormReturn = {
    value: string;
    handleChange: (newValue: string) => void;
    handleSave: (onSave: (text: string) => void) => void;
    handleCancel: (onCancel: () => void) => void;
};
