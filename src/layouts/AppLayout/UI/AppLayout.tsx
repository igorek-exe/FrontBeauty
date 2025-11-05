import React from 'react';
import {
    CountrySelector,
    LinkButton,
    Logo,
    Menu,
    ScrollButton,
    SvgIcon,
} from '@/components';
import { Header, Footer, FooterNav, FooterLegal } from '@/layouts';
import logoIcon from '@/assets/icons/Logo.svg?react';
import LogoFooter from '@/assets/icons/LogoFooter.svg?react';
import LoginIcon from '@/assets/icons/LoginRounded.svg?react';
import AssignmentIcon from '@/assets/icons/AssignmentIndRounded.svg?react';
import styles from './index.module.scss';
import type { AppLayoutProps } from '@/layouts/AppLayout/index.model.ts';
import { cn } from '@/utils';

const AppLayout: React.FC<AppLayoutProps> = ({ children, showAuthButtons }) => {
    return (
        <>
            <ScrollButton />

            <Header>
                <div className={cn(styles, 'bg-light-pink', 'wrapper')}>
                    <div className="container">
                        <div className={styles.headerWrapp}>
                            <Logo icon={logoIcon} />
                            <div className={styles.navbarMenu}>
                                <Menu />
                            </div>
                            <p className={styles.btnWrapp}>
                                {showAuthButtons && (
                                    <>
                                        <LinkButton to="#" className="linkButton-login">
                                            Вход
                                            <SvgIcon Icon={LoginIcon} />
                                        </LinkButton>
                                        <LinkButton
                                            to="/register/master"
                                            className="linkButton-reg"
                                        >
                                            Регистрация
                                            <SvgIcon Icon={AssignmentIcon} />
                                        </LinkButton>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </Header>

            {children}

            <Footer>
                <div className="bg-light-pink">
                    <div className="container">
                        <div className={styles.wrappFooter}>
                            <SvgIcon Icon={LogoFooter} className="logoFooter" />

                            <div className={styles.wrappFooterNav}>
                                <FooterNav />
                            </div>

                            <hr className={styles.footerSeparator} />

                            <div className={styles.basement}>
                                <FooterLegal companyName="LOGO" years="2011–2024" />
                                <CountrySelector />
                            </div>
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    );
};

export { AppLayout };
