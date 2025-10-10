import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateAddress } from '@/stores/slices/masterSlice';
import { useEditableList } from '@/hooks/useEditableList';
import { AddressItem } from './masterAddressesTypes';

export const useMasterAddresses = () => {
    const dispatch = useAppDispatch();
    const addressData = useAppSelector((state) => state.master.addressData);

    const {
        items: addresses,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<AddressItem>({
        initialList: addressData ?? [],
        emptyItem: { address: '', region: '' },
        onSave: (updated) => {
            dispatch(updateAddress(updated));
        },
    });

    return {
        addresses,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    };
};
