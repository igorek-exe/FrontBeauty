import React from 'react';
import styles from './index.module.scss';
import { LinkButton } from '@/components';
import { title, desc, textLink, textDomen } from '@/content';

const MasterClientIntro = () => {
    return (
        <div className={styles.promoContent}>
            <h2 className={styles.title}>{title}</h2>
            {desc}
            <LinkButton to={textDomen} className="linkMasterClientPromo">
                {textLink}
            </LinkButton>
        </div>
    );
};

export { MasterClientIntro };
