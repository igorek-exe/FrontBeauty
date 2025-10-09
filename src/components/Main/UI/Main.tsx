import React from 'react';
import type { MainProps } from '@/components';
import styles from './index.module.scss';
import { cn } from '@/utils/cn';

const Main: React.FC<MainProps> = ({ children, className }) => {
    return <main className={cn(styles, 'main', className)}>{children}</main>;
};

export { Main };
