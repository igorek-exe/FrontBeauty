import React from 'react';
import Edit from '@/assets/icons/Edit.svg?react';
import Check from '@/assets/icons/Check.svg?react';
import { SvgIcon, Button, MasterExperienceForm } from '@/components';
import styles from './index.module.scss';
import { MasterExperienceProps } from '../model/masterExperienceTypes';

export const MasterExperience: React.FC<MasterExperienceProps> = ({
    experience,
    isEditing,
    onEdit,
    onChange,
    onAdd,
    onRemove,
    onSave,
    onCancel,
}) => {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>Опыт</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {isEditing ? (
                <MasterExperienceForm
                    experience={experience}
                    onChange={onChange}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            ) : (
                <ul>
                    {experience.map((item, index) => (
                        <li key={index} className={styles.experienceItem}>
                            <SvgIcon Icon={Check} className="check" />
                            <p className={styles.text}>{item.title}</p>
                            <p className={styles.experienceYearBlock}>
                                <span className={styles.label}>период работы</span>
                                <p className={styles.year}>
                                    {item.yearStart} — {item.yearEnd}
                                </p>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
