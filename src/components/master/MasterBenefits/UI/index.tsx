import styles from './index.module.scss';
import { SvgIcon } from '@/components';
import HeartBenefits from '@/assets/icons/HeartBenefits.svg?react';
import React from 'react';

const MasterBenefits = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.topWrapper}>
                <div className={styles.blockTop1}>
                    <SvgIcon Icon={HeartBenefits} className="heartTop1" />
                    <p className={styles.benefit1}>
                        Регистрируйся на портале
                        <br /> “Твой мастер маникюра”
                    </p>
                </div>
                <div className={styles.blockTop2}>
                    <SvgIcon Icon={HeartBenefits} className="heartTop2" />
                    <p className={styles.benefit2}>Следи за графиком своей работы</p>
                </div>
                <div className={styles.blockTop3}>
                    <SvgIcon Icon={HeartBenefits} className="heartTop3" />
                    <p className={styles.benefit3}>Обсуди с клиентом процедуру в Сообщенниях</p>
                </div>
            </div>
            <div className={styles.bottomWrapper}>
                <div className={styles.blockBottom1}>
                    <SvgIcon Icon={HeartBenefits} className="heartBottom1" />
                    <p className={styles.benefit4}>Получай лучшие отзывы и собирай звезды</p>
                </div>
                <div className={styles.blockBottom2}>
                    <SvgIcon Icon={HeartBenefits} className="heartBottom2" />
                    <p className={styles.benefit5}>
                        Твой клиент найдет тебя и забронирует удобноне время для процедуры
                    </p>
                </div>
                <div className={styles.blockBottom3}>
                    <SvgIcon Icon={HeartBenefits} className="heartBottom3" />
                    <p className={styles.benefit6}>
                        Оформляй витрину своего кабинета - загружай лучшие фото работ
                    </p>
                </div>
            </div>
        </section>
    );
};

export { MasterBenefits };
