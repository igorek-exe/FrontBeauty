export type UserProfile = {
    name: string;
    email: string;
    phone: string;
};

export type MasterProfileCardProps = {
    photoUrl?: string;
    user: UserProfile;
    formData: UserProfile;
    isEditing: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit: () => void;
    onSave: () => void;
    onCancel: () => void;
};
