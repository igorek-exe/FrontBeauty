import React from 'react';
import { ServiceCardSlider } from '@/components';
import styles from './index.module.scss';

const MasterPortfolio: React.FC = () => {
    return (
        <section className={styles.portfolio}>
            <h2 className={styles.title}>Портфолио</h2>
            <ServiceCardSlider />
        </section>
    );
};

export { MasterPortfolio };
