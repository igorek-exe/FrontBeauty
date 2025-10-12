import React from 'react';
import styles from './index.module.scss';
import type { MasterExperienceFormProps } from '@/components';

const MasterExperienceForm: React.FC<MasterExperienceFormProps> = ({
    experience,
    onChange,
    onAdd,
    onRemove,
    onSave,
    onCancel,
}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Редактировать опыт</h2>

            {experience.map((item, index) => (
                <div key={index} className={styles.item}>
                    <input
                        type="text"
                        value={item.title}
                        onChange={(e) => onChange(index, 'title', e.target.value)}
                        placeholder="Название опыта"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={item.yearStart}
                        onChange={(e) => onChange(index, 'yearStart', e.target.value)}
                        placeholder="Начало"
                        className={styles.year}
                    />
                    <input
                        type="text"
                        value={item.yearEnd}
                        onChange={(e) => onChange(index, 'yearEnd', e.target.value)}
                        placeholder="Конец"
                        className={styles.year}
                    />
                    <button
                        type="button"
                        onClick={() => onRemove(index)}
                        className={styles.removeBtn}
                        aria-label="Удалить"
                    >
                        ×
                    </button>
                </div>
            ))}

            <button type="button" onClick={onAdd} className={styles.addBtn}>
                + Добавить опыт
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

export { MasterExperienceForm };
