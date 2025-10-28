import React from 'react';
import { ImageUploaderContainer } from '@/components';
import type { DiplomasProps } from '@/components/widgets/Diplomas/index.model.ts';
import styles from './index.module.scss';

const Diplomas: React.FC<DiplomasProps> = ({ uploadSlots = 6 }) => {
    return (
        <section className={styles.diplomasWrapper}>
            <h2 className={styles.title}>Сертификаты и дипломы</h2>
            <div className={styles.grid}>
                {Array.from({ length: uploadSlots }).map((_, index) => (
                    <ImageUploaderContainer key={index} />
                ))}
            </div>
        </section>
    );
};

export { Diplomas };
