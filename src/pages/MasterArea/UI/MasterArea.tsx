import React from 'react';
import {
    MasterSidebar,
    MasterProfileContainer,
    ScheduleContainer,
    MasterAboutContainer,
    MasterEducationContainer,
    MasterAddressesContainer,
    MasterServicesContainer,
    MasterExperienceContainer,
    Diplomas,
    MasterPortfolio,
} from '@/components';
import { Main, AppLayout } from '@/layouts';
import { useAppSelector } from '@/hooks/reduxHooks';
import styles from './index.module.scss';
import type { MasterAreaProps } from '@/pages/MasterArea/index.model.ts';

const MasterArea: React.FC<MasterAreaProps> = () => {
    // Это вызов, чтобы подписаться на часть состояния (опыт мастера)
    useAppSelector((state) => state.master.experience);

    return (
        <AppLayout>
            <Main>
                <div className="bg-white">
                    <div className="container">
                        <div className={styles.masterProfileSection}>
                            <MasterSidebar />

                            <div className={styles.wrappMainPanel}>
                                <div className={styles.mainPanel}>
                                    <MasterProfileContainer />
                                    <ScheduleContainer />
                                </div>

                                <div className={styles.wrappAboutCard}>
                                    <MasterAboutContainer />
                                    <MasterEducationContainer />
                                    <MasterExperienceContainer index={0} />
                                    <Diplomas />
                                    <MasterExperienceContainer index={1} />
                                    <MasterAddressesContainer />
                                    <MasterServicesContainer />
                                    <MasterPortfolio />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </AppLayout>
    );
};

export { MasterArea };
