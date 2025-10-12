import React from 'react';
import { Button } from '@/components';
import type { DiscountCardProps } from '@/components';
import styles from './index.module.scss';

const DiscountCard: React.FC<DiscountCardProps> = ({ percent }) => {
    return (
        <div className={styles.discountCard}>
            <div className={styles.discountHeader}>{percent}% скидка</div>
            <p className={styles.discountText}>
                Скидка {percent} % при оформлении маникюра и педикюра в салоне Краски.
            </p>
            <Button classNames={{ buttonClass: 'discountBtn' }}>Записаться со скидкой</Button>
        </div>
    );
};

export { DiscountCard };
