import React from 'react';
import styles from './index.module.scss';
import type { FooterProps } from '@/layouts/Footer/index.model.ts';
import { cn } from '@/utils/UI/cn.ts';

const Footer: React.FC<FooterProps> = ({ children, className }) => {
    return <footer className={cn(styles, 'footer', className)}>{children}</footer>;
};

export { Footer };
