import React from 'react';
import styles from './index.module.scss';
import type { MasterEducationFormProps } from '@/components';

const MasterEducationForm: React.FC<MasterEducationFormProps> = ({
    education,
    onChange,
    onAdd,
    onRemove,
    onSave,
    onCancel,
}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Редактировать образование</h2>

            <ul className={styles.list}>
                {education.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <input
                            type="text"
                            value={item.title}
                            placeholder="Название курса"
                            onChange={(e) => onChange(index, 'title', e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            value={item.year}
                            placeholder="Год"
                            onChange={(e) => onChange(index, 'year', e.target.value)}
                            className={styles.year}
                        />
                        <button
                            type="button"
                            className={styles.removeBtn}
                            onClick={() => onRemove(index)}
                            aria-label="Удалить"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>

            <button type="button" onClick={onAdd} className={styles.addBtn}>
                + Добавить курс
            </button>

            <div className={styles.actions}>
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

export { MasterEducationForm };
