import React from 'react';
import Edit from '@/assets/icons/Edit.svg?react';
import styles from './index.module.scss';
import { MasterAboutForm, SvgIcon, Button } from '@/components';
import { MasterAboutProps } from '../model/masterAboutTypes';

export const MasterAbout: React.FC<MasterAboutProps> = ({
    aboutText,
    tempText,
    isEditing,
    onEdit,
    onChange,
    onSave,
    onCancel,
}) => {
    return (
        <div className={styles.aboutCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>О себе</h2>
                {!isEditing && (
                    <Button classNames={{ buttonClass: 'editButton' }} onClick={onEdit}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {!isEditing ? (
                <p className={styles.text}>{aboutText}</p>
            ) : (
                <MasterAboutForm value={tempText} onChange={onChange} onSave={onSave} onCancel={onCancel} />
            )}
        </div>
    );
};
