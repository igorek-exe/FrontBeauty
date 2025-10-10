import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { setUserType } from '@/stores/slices/userTypeSlice';
import { UserType } from '../model/bannerTypes';

export const useBanner = () => {
    const dispatch = useDispatch();
    const userType = useSelector((state: RootState) => state.userType.userType);

    const handleUserTypeChange = (type: UserType) => {
        dispatch(setUserType(type));
    };

    return {
        userType,
        handleUserTypeChange,
    };
};
