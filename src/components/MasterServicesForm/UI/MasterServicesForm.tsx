import React from 'react';
import type { MasterServicesFormProps } from '@/components';
import styles from './index.module.scss';

const MasterServicesForm: React.FC<MasterServicesFormProps> = ({
                                                                   services,
                                                                   onChange,
                                                                   onAdd,
                                                                   onRemove,
                                                                   onSave,
                                                                   onCancel,
                                                               }) => {
    return (
        <div className={styles.form}>
            {services.map((item, index) => (
                <div key={index} className={styles.row}>
                    <input
                        type="text"
                        placeholder="Название"
                        value={item.title}
                        onChange={(e) => onChange(index, 'title', e.target.value)}
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Описание"
                        value={item.description}
                        onChange={(e) => onChange(index, 'description', e.target.value)}
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Цена"
                        value={item.price}
                        onChange={(e) => onChange(index, 'price', e.target.value)}
                        className={styles.priceInput}
                    />
                    <button
                        onClick={() => onRemove(index)}
                        aria-label="Удалить услугу"
                        className={styles.removeBtn}
                    >
                        ×
                    </button>
                </div>
            ))}

            <div className={styles.actions}>
                <button type="button" onClick={onAdd} className={styles.addBtn}>
                    + Добавить
                </button>
            </div>

            <div className={styles.footer}>
                <button type="button" onClick={onSave} className={styles.saveBtn}>
                    Сохранить
                </button>
                <button type="button" onClick={onCancel} className={styles.cancelBtn}>
                    Отмена
                </button>
            </div>
        </div>
    );
};

export { MasterServicesForm };
