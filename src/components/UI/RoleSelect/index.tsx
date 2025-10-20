import SelectRole from '@/assets/icons/SelectRole.svg?react';
import { SvgIcon } from '@/components';
import styles from './index.module.scss';

const RoleSelect = () => {
    return (
        <div className={styles.selectWrapper}>
            <select defaultValue="master" className={styles.customSelect}>
                <option value="master">Мастер</option>
                <option value="client">Клиент</option>
            </select>
            <SvgIcon Icon={SelectRole} className="selectRole" />
        </div>
    );
};

export default RoleSelect;
