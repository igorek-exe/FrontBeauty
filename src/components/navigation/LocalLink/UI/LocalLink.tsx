import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/UI/cn.ts';
import styles from './index.module.scss';
import type { LocalLinkProps } from '@/components/navigation/LocalLink/index.model.ts';

export const LocalLink: React.FC<LocalLinkProps> = ({ to, children, classNames = {} }) => {
    return (
        <Link to={to} className={cn(styles, 'link', classNames.linkClass)}>
            {children}
        </Link>
    );
};
