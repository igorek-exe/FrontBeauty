import React from 'react';
import { CountrySelector, Dropdown, LinkButton, Logo, Menu, ScrollButton, SvgIcon } from '@/components';
import { Header, Footer, FooterNav, FooterLegal } from '@/layouts';
import logoIcon from '@/assets/icons/colored/Logo.svg?react';
import LogoFooter from '@/assets/icons/colored/LogoFooter.svg?react';
import PurpleArrowDown from '@/assets/icons/colored/PurpleArrowDown.svg?react';
import styles from './index.module.scss';
import { cn } from '@/utils/UI/cn.ts';
import type { AppLayoutProps } from '@/layouts';

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <>
            <ScrollButton />

            <Header>
                <div className={cn(styles, 'bg-light-pink', 'wrapper')}>
                    <div className="container">
                        <div className={styles.headerWrapp}>
                            <Logo icon={logoIcon} />
                            <p className={styles.navbarMenu}>
                                <Dropdown
                                    buttonLabel="Меню"
                                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                                    icon={<SvgIcon Icon={PurpleArrowDown} className="dropDownMenu" />}
                                    onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
                                />
                                <Menu />
                            </p>
                            <LinkButton to="#">Вход</LinkButton>
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

export { AppLayout };
