import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import styles from './index.module.scss';
import type { LinkButtonProps } from '@/components';

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children, classNames = {} }) => {
    return (
        <Link to={to} className={cn(styles, 'linkButton', classNames.linkClass)}>
            {children}
        </Link>
    );
};
