import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateExperience } from '@/stores/slices/masterSlice';
import { useEditableList } from '@/hooks/useEditableList';
import { ExperienceItem } from './masterExperienceTypes';

export const useMasterExperience = (index: number = 0) => {
    const dispatch = useAppDispatch();
    const experience = useAppSelector((state) => state.master.experience);
    const list: ExperienceItem[] = (experience[index] || []) as ExperienceItem[];

    const {
        items: tempExperience,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<ExperienceItem>({
        initialList: list,
        emptyItem: { title: '', yearStart: '', yearEnd: '' },
        onSave: (updatedItemList) => {
            const updatedExperience = [...experience];
            updatedExperience[index] = updatedItemList;
            dispatch(updateExperience(updatedExperience));
        },
    });

    return {
        experience: tempExperience,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    };
};
