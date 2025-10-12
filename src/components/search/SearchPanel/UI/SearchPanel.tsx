import React from 'react';
import { SearchForm } from '@/components';
import type { SearchPanelProps } from '@/components';
import styles from './index.module.scss';

const SearchPanel: React.FC<SearchPanelProps> = ({ title }) => {
    return (
        <section className={styles.searchPanel}>
            <h1 className={styles.searchTitle}>{title}</h1>
            <SearchForm />
        </section>
    );
};

export { SearchPanel };
