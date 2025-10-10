import React from 'react';
import type { MasterEditFormProps } from '@/components';
import { Button, Input } from '@/components';
import styles from './index.module.scss';

export const MasterEditForm: React.FC<MasterEditFormProps> = ({ formData, onChange, onSave, onCancel }) => {
    return (
        <form className={styles.editForm} onSubmit={(e) => e.preventDefault()}>
            <Input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Имя" />
            <Input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" />
            <Input type="tel" name="phone" value={formData.phone} onChange={onChange} placeholder="Телефон" />

            <div className={styles.buttonGroup}>
                <Button type="button" onClick={onSave}>
                    Сохранить
                </Button>
                <Button type="button" onClick={onCancel}>
                    Отмена
                </Button>
            </div>
        </form>
    );
};
