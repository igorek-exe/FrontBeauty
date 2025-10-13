import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/UI/cn.ts';
import styles from './index.module.scss';
import type { LinkButtonProps } from '@/components';

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children, className }) => {
    return (
        <Link to={to} className={cn(styles, 'linkButton', className)}>
            {children}
        </Link>
    );
};
