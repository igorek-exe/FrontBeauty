import React from 'react';
import { Button, SvgIcon, MasterEditForm } from '@/components';
import Avatar from '@/assets/icons/Avatar.svg?react';
import Edit from '@/assets/icons/Edit.svg?react';
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
                    <div className={styles.avatarWrapper}>
                        <SvgIcon Icon={Avatar} />
                    </div>
                )}
                <h2 className={styles.title}>Мой профиль</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {!isEditing ? (
                <div className={styles.infoGroup}>
                    <div className={styles.infoItem}>
                        <p className={styles.masterName}>{user.name}</p>
                        <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                            <SvgIcon Icon={Edit} />
                        </Button>
                    </div>
                    <div className={styles.infoItem}>
                        <p className={styles.masterEmail}>{user.email}</p>
                        <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                            <SvgIcon Icon={Edit} />
                        </Button>
                    </div>
                    <div className={styles.infoItem}>
                        <p className={styles.masterPhone}>{user.phone}</p>
                        <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                            <SvgIcon Icon={Edit} />
                        </Button>
                    </div>
                </div>
            ) : (
                <MasterEditForm
                    formData={formData}
                    onChange={onChange}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            )}
        </div>
    );
};
