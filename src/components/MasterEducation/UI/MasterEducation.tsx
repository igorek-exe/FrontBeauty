import React from 'react';
import Edit from '@/assets/icons/colored/Edit.svg?react';
import { SvgIcon, Button, IconSprite, MasterEducationForm } from '@/components';
import styles from './index.module.scss';
import { MasterEducationProps } from '../model/masterEducationTypes';

export const MasterEducation: React.FC<MasterEducationProps> = ({
                                                                    education,
                                                                    isEditing,
                                                                    onEdit,
                                                                    onChange,
                                                                    onAdd,
                                                                    onRemove,
                                                                    onSave,
                                                                    onCancel,
                                                                }) => {
    return (
        <div className={styles.educationCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>Образование</h2>
                {!isEditing && (
                    <Button classNames={{ buttonClass: 'editButton' }} onClick={onEdit}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {isEditing ? (
                <MasterEducationForm
                    education={education}
                    onChange={onChange}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            ) : (
                <ul>
                    {education.map((item, index) => (
                        <li key={index} className={styles.educationItem}>
                            <IconSprite name="Check" classNames={{ iconClass: 'check' }} />
                            <p className={styles.educationText}>{item.title}</p>
                            <p className={styles.educationYearBlock}>
                                <span className={styles.label}>год окончания</span>
                                <span className={styles.year}>{item.year}</span>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
