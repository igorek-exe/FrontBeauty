import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateServices } from '@/stores/slices/masterSlice';
import { useEditableList } from '@/hooks/useEditableList';
import { ServiceItem } from './masterServicesTypes';

export const useMasterServices = () => {
    const dispatch = useAppDispatch();
    const storedServices = useAppSelector((state) => state.master.services);

    const {
        items: services,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<ServiceItem>({
        initialList: storedServices,
        emptyItem: { title: '', description: '', price: '' },
        onSave: (updated) => {
            dispatch(updateServices(updated));
        },
    });

    return {
        services,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    };
};
