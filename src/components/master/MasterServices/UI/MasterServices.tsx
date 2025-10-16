import React from 'react';
import Edit from '@/assets/icons/Edit.svg?react';
import Check from '@/assets/icons/Check.svg?react';
import { SvgIcon, Button, MasterServicesForm } from '@/components';
import styles from './index.module.scss';
import { MasterServicesProps } from '../model/masterServicesTypes';

export const MasterServices: React.FC<MasterServicesProps> = ({
    services,
    isEditing,
    onEdit,
    onChange,
    onAdd,
    onRemove,
    onSave,
    onCancel,
}) => {
    return (
        <div className={styles.servicesCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>Услуги и цены</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {isEditing ? (
                <MasterServicesForm
                    services={services}
                    onChange={onChange}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            ) : (
                <ul className={styles.servicesList}>
                    {services.map((item, index) => (
                        <li key={index} className={styles.servicesItem}>
                            <div className={styles.itemContent}>
                                <SvgIcon Icon={Check} className="checkServices" />
                                <div className={styles.serviceInfo}>
                                    <p className={styles.serviceTitle}>{item.title}</p>
                                    <p className={styles.serviceDesc}>{item.description}</p>
                                </div>
                            </div>
                            <div className={styles.servicePriceBlock}>
                                <span className={styles.label}>за ноготь</span>
                                <p className={styles.servicePrice}>{item.price} руб.</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
