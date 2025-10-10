import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateEducation } from '@/stores/slices/masterSlice';
import { useEditableList } from '@/hooks/useEditableList';
import { EducationItem } from './masterEducationTypes';

export const useMasterEducation = () => {
    const dispatch = useAppDispatch();
    const education = useAppSelector((state) => state.master.education);

    const {
        items: tempEducation,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<EducationItem>({
        initialList: education,
        emptyItem: { title: '', year: '' },
        onSave: (updatedList) => dispatch(updateEducation(updatedList)),
    });

    return {
        education: tempEducation,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    };
};
