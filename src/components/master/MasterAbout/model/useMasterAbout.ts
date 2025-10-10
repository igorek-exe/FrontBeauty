import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateAbout } from '@/stores/slices/masterSlice';
import { useEditableValue } from '@/hooks/useEditableValue';

export const useMasterAbout = () => {
    const dispatch = useAppDispatch();
    const aboutText = useAppSelector((state) => state.master.about);

    const {
        value: tempText,
        setValue: setTempText,
        isEditing,
        handleEdit,
        handleCancel,
        handleSave,
    } = useEditableValue(aboutText);

    const saveAbout = () => {
        handleSave((text) => dispatch(updateAbout(text)));
    };

    return {
        aboutText,
        tempText,
        setTempText,
        isEditing,
        handleEdit,
        handleCancel,
        saveAbout,
    };
};
