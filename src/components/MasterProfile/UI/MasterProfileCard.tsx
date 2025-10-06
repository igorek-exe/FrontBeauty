import React from 'react';
import { Button, SvgIcon, ProfileEditForm } from '@/components';
import Avatar from '@/assets/icons/colored/Avatar.svg?react';
import Edit from '@/assets/icons/colored/Edit.svg?react';
import styles from './index.module.scss';
import { MasterProfileCardProps } from '../model/masterProfileTypes';

export const MasterProfileCard: React.FC<MasterProfileCardProps> = ({
                                                                        photoUrl,
                                                                        user,
                                                                        formData,
                                                                        isEditing,
                                                                        onChange,
                                                                        onEdit,
                                                                        onSave,
                                                                        onCancel,
                                                                    }) => {
    return (
        <div className={styles.masterProfileCard}>
            <div className={styles.cardHeader}>
                {photoUrl ? (
                    <img src={photoUrl} alt="Фото мастера" className={styles.profilePhoto} />
                ) : (
                    <SvgIcon Icon={Avatar} />
                )}
                <h2 className={styles.title}>Мой профиль</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {!isEditing ? (
                <>
                    <p className={styles.masterName}>{user.name}</p>
                    <p className={styles.masterEmail}>{user.email}</p>
                    <p className={styles.masterPhone}>{user.phone}</p>
                </>
            ) : (
                <ProfileEditForm
                    formData={formData}
                    onChange={onChange}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            )}
        </div>
    );
};
