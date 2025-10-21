import styles from './index.module.scss';
import { Picture } from '@/components';
import React from 'react';
import { MasterClientIntro } from '@/components/master/MasterClientIntro';

const MasterPromoSection = () => {
    return (
        <section className={styles.wrapperSection}>
            <Picture src={'/images/masterPromo.png'} alt={'мастер'} />
            <MasterClientIntro />
        </section>
    );
};

export { MasterPromoSection };
