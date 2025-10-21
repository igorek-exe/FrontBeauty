import styles from '@/components/master/MasterClientIntro/UI/index.module.scss';
import { desc, textDomen, textLink, title } from '@/components/master/MasterClientIntro/model/masterClientIntroContent.tsx';
import { LinkButton } from '@/components';
import React from 'react';

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