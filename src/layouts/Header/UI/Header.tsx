import React from 'react';
import styles from './index.module.scss';
import type { HeaderProps } from '@/layouts/Header';
import { cn } from '@/utils/cn.ts';

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    return <header className={cn(styles, 'header', className)}>{children}</header>;
};

export { Header };
