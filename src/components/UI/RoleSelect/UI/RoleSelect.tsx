import React from 'react';
import SelectRole from '@/assets/icons/SelectRole.svg?react';
import { SvgIcon } from '@/components';
import styles from './index.module.scss';
import type { RoleSelectProps } from '@/components/UI/RoleSelect/index.model.ts';

export const RoleSelect: React.FC<RoleSelectProps> = ({ defaultRole = 'master', onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as 'master' | 'client');
    };

    return (
        <div className={styles.selectWrapper}>
            <select
                defaultValue={defaultRole}
                onChange={handleChange}
                className={styles.customSelect}
            >
                <option value="master">Мастер</option>
                <option value="client">Клиент</option>
            </select>
            <SvgIcon Icon={SelectRole} className="selectRole" />
        </div>
    );
};
