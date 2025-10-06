import React from 'react';
import {
    Main,
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
import { useAppSelector } from '@/hooks/reduxHooks';
import styles from './masterArea.module.scss';
import { AppLayout } from '@/layouts';

const MasterArea = () => {
    useAppSelector((state) => state.master.experience);
    return (
        <>
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
        </>
    );
};

export { MasterArea };
