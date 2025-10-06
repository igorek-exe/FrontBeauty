import React from 'react';
import { ServiceCardSlider } from '@/components';
import styles from './masterportfolio.module.scss';

const MasterPortfolio: React.FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Портфолио</h2>
            <ServiceCardSlider />
        </div>
    );
};

export { MasterPortfolio };
