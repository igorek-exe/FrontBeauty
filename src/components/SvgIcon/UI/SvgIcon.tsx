import React from 'react';
import styles from './index.module.scss';
import type { SvgIconProps } from '@/components/SvgIcon';
import { cn } from '@/utils/cn';

export const SvgIcon: React.FC<SvgIconProps> = ({ Icon, className }) => {
    const appliedClass = cn(styles, 'icon', className);
    return <Icon className={appliedClass} />;
};
