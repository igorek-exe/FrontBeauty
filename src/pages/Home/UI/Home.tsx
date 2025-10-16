import React from 'react';
import {
    Dropdown,
    LinkButton,
    Logo,
    Menu,
    SearchPanel,
    MastersToolbar,
    MasterList,
    Slider,
    JoinSection,
    HelpSection,
    CountrySelector,
    BannerContainer,
    SvgIcon,
} from '@/components';
import { Header, Footer, FooterNav, FooterLegal, Main } from '@/layouts';
import logoIcon from '@/assets/icons/Logo.svg?react';
import LoginIcon from '@/assets/icons/LoginRounded.svg?react';
import LogoFooter from '@/assets/icons/LogoFooter.svg?react';
import PurpleArrowDown from '@/assets/icons/PurpleArrowDown.svg?react';
import AssignmentIcon from '@/assets/icons/AssignmentIndRounded.svg?react';
import styles from './index.module.scss';
import type { HomeProps } from '@/pages';

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Header>
                <div className="bg-light-pink">
                    <div className="container">
                        <div className={styles.headerWrapp}>
                            <Logo icon={logoIcon} />
                            <p className={styles.navbarMenu}>
                                <Dropdown
                                    buttonLabel="Меню"
                                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                                    icon={
                                        <SvgIcon Icon={PurpleArrowDown} className="dropDownMenu" />
                                    }
                                    onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
                                />
                                <Menu />
                            </p>
                            <p className={styles.btnWrapp}>
                                <LinkButton to="#" className="linkButton-login">
                                    Вход
                                    <SvgIcon Icon={LoginIcon} />
                                </LinkButton>
                                <LinkButton to="/register/master" className="linkButton-reg">
                                    Регистрация
                                    <SvgIcon Icon={AssignmentIcon} />
                                </LinkButton>
                            </p>
                        </div>
                    </div>
                </div>
            </Header>

            <Main>
                <div className={styles.hero}>
                    <div className="container _h-100">
                        <BannerContainer />
                    </div>
                </div>

                <div className="bg-white">
                    <div className="container _relative">
                        <SearchPanel title="Найди своего мастера ногтевого сервиса максимально быстро и удобно." />
                        <p className={styles.wrappToolbar}>
                            <MastersToolbar />
                        </p>
                    </div>
                    <div className="container">
                        <MasterList />
                    </div>
                </div>

                <div className="bg-light-pink">
                    <div className="container">
                        <Slider />
                    </div>
                </div>

                <div className="bg-white">
                    <div className="container">
                        <JoinSection />
                    </div>
                </div>

                <div className="bg-purple">
                    <div className="container">
                        <HelpSection />
                    </div>
                </div>
            </Main>

            <Footer>
                <div className="bg-light-pink">
                    <div className="container">
                        <div className={styles.wrappFooter}>
                            <SvgIcon Icon={LogoFooter} className="logoFooter" />

                            <p className={styles.wrappFooterNav}>
                                <FooterNav />
                            </p>

                            <hr className={styles.footerSeparator} />

                            <p className={styles.basement}>
                                <FooterLegal companyName="LOGO" years="2011–2024" />
                                <CountrySelector />
                            </p>
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    );
};

export { Home };
