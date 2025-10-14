import React from 'react';
import styles from './index.module.scss';
import { Picture, Button, SvgIcon } from '@/components';
import StarOutline from '@/assets/icons/colored/StarOutline.svg?react';
import Message from '@/assets/icons/colored/Message.svg?react';
import HeartOutline from '@/assets/icons/colored/HeartOutline.svg?react';
import { useMasterCard, MasterCardProps } from '@/components/master/MasterCard/index.model';

const MasterCard: React.FC<MasterCardProps> = (props) => {
    const { name, rating, reviewsCount, specialty, address, reviewWord } = useMasterCard(props);

    return (
        <div className={styles.card}>
            <div className={styles.masterWrapp}>
                <Picture src={'/images/masterPhoto.png'} alt={'фото мастера'} />
                <div className={styles.masterInfo}>
                    <SvgIcon Icon={StarOutline} className="starOutIcon" />
                    <span className={styles.evalMaster}>{rating}</span>
                    <SvgIcon Icon={Message} className="messageIcon" />
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
                    <SvgIcon Icon={HeartOutline} className="heartOutIcon" />
                </div>

                <Button classNames={{ buttonClass: 'bookBtn' }}>Записаться</Button>
            </div>
        </div>
    );
};

export { MasterCard };