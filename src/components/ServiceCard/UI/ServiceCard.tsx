import React from 'react';
import Upload from '@/assets/icons/colored/Upload.svg?react';
import Edit from '@/assets/icons/colored/Edit.svg?react';
import { SvgIcon, Picture, Button, ServiceCardForm } from '@/components';
import styles from './index.module.scss';
import { ServiceCardProps } from '../model/serviceCardTypes';

export const ServiceCard: React.FC<ServiceCardProps> = ({
                                                            formData,
                                                            tempData,
                                                            hovered,
                                                            uploadMode,
                                                            setHovered,
                                                            setUploadMode,
                                                            setTempData,
                                                            onInputChange,
                                                            onImageUpload,
                                                            onSubmit,
                                                            onClear,
                                                        }) => {
    const hasImage = formData.image !== '';

    return (
        <div
            className={styles.wrapServCard}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.imgSection}>
                {hasImage ? (
                    <div className={styles.wrappPicture}>
                        <Picture src={formData.image} alt="preview" className="picture" />
                        {hovered && (
                            <>
                                <Button onClick={onClear} classNames={{ buttonClass: 'actionIcon' }}>
                                    <SvgIcon Icon={Edit} className="editUpload" />
                                </Button>
                                <Button
                                    classNames={{ buttonClass: 'textButton' }}
                                    onClick={() => {
                                        setUploadMode(true);
                                        setTempData(formData);
                                    }}
                                >
                                    редактировать
                                </Button>
                            </>
                        )}
                    </div>
                ) : (
                    <div
                        className={styles.wrappIcon}
                        onClick={() => {
                            setUploadMode(true);
                            setTempData(formData);
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <SvgIcon Icon={Upload} />
                    </div>
                )}
            </div>

            {!uploadMode && (
                <div className={styles.infoBlock}>
                    <h3 className={styles.title}>{formData.name || '—'}</h3>
                    <p className={styles.text}>
                        <strong>Покрытие:</strong> {formData.coating || '—'}
                    </p>
                    <p className={styles.text}>
                        <strong>Дизайн:</strong> {formData.design || '—'}
                    </p>
                    <p className={styles.text}>
                        <strong>Адрес:</strong> {formData.address || '—'}
                    </p>
                    <p className={styles.label}>Стоимость</p>
                    <p className={styles.price}>{formData.price || '—'}</p>
                </div>
            )}

            {uploadMode && (
                <ServiceCardForm
                    data={tempData}
                    onChange={onInputChange}
                    onImageUpload={onImageUpload}
                    onSubmit={onSubmit}
                    onCancel={() => setUploadMode(false)}
                />
            )}
        </div>
    );
};
