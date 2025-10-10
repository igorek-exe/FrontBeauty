import type { ServiceItem } from '@/stores/slices/masterSlice';

export type MasterServicesFormProps = {
    services: ServiceItem[];
    onChange: (index: number, field: keyof ServiceItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};
