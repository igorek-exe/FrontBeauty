import React from 'react';
import { SearchForm } from '@/components';
import type { SearchPanelProps } from '@/components/SearchPanel';
import styles from './index.module.scss';
import { cn } from '@/utils/cn';

const SearchPanel: React.FC<SearchPanelProps> = ({ title, subtitle, className }) => {
    return (
        <section className={cn(styles, 'panel', className)}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                <SearchForm />
            </div>
        </section>
    );
};

export { SearchPanel };
