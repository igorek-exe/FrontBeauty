import React from 'react';
import styles from './index.module.scss';
import { Picture, Button, IconSprite } from '@/components';
import { useMasterCard } from '@/components';
import type { MasterCardProps } from '@/components';

const MasterCard: React.FC<MasterCardProps> = (props) => {
    const { name, rating, reviewsCount, specialty, address, reviewWord } = useMasterCard(props);

    return (
        <div className={styles.card}>
            <div className={styles.masterWrapp}>
                <Picture src={'/images/masterPhoto.png'} alt={'фото мастера'} />
                <div className={styles.masterInfo}>
                    <IconSprite name="StarOutline" classNames={{ iconClass: 'starOutIcon' }} />
                    <span className={styles.evalMaster}>{rating}</span>
                    <IconSprite name="Message" classNames={{ iconClass: 'messageIcon' }} />
                    <span>
                        {reviewsCount} {reviewWord}
                    </span>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.infoNextWrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{name}</h2>
                        <p className={styles.specialty}>{specialty}</p>
                        <p className={styles.address}>{address}</p>
                    </div>
                    <IconSprite name="HeartOutline" classNames={{ iconClass: 'heartOutIcon' }} />
                </div>

                <Button classNames={{ buttonClass: 'bookBtn' }}>Записаться</Button>
            </div>
        </div>
    );
};

export { MasterCard };
