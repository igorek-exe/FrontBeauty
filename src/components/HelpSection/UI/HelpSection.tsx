import React from 'react';
import { SvgIcon, ExternalLink } from '@/components';
import ViberIcon from './../../../assets/icons/colored/Viber.svg?react';
import WhatsAppIcon from './../../../assets/icons/colored/WhatsApp.svg?react';
import type { HelpSectionProps } from '@/components';
import styles from './inedx.module.scss';

const HelpSection: React.FC<HelpSectionProps> = ({
                                                     viberNumber = '+1234567890',
                                                     whatsappNumber = '+1234567890',
                                                 }) => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>Возникли вопросы?</h2>
            <p className={styles.subtitle}>Свяжитесь с нами в мессенджерах:</p>

            <div className={styles.iconGroup}>
                <ExternalLink
                    href={`viber://chat?number=%2B${viberNumber.replace('+', '')}`}
                    classNames={{ linkClass: 'viberLink' }}
                >
                    <SvgIcon Icon={ViberIcon} />
                </ExternalLink>

                <ExternalLink
                    href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                    classNames={{ linkClass: 'whatsappLink' }}
                >
                    <SvgIcon Icon={WhatsAppIcon} />
                </ExternalLink>
            </div>
        </section>
    );
};

export { HelpSection };
