import React from 'react';
import styles from './index.module.scss';
import type { SvgIconProps } from '@/components/UI/SvgIcon/index.model.ts';
import { cn } from '@/utils/UI/cn.ts';

export const SvgIcon: React.FC<SvgIconProps> = ({ Icon, className }) => {
    const appliedClass = cn(styles, 'icon', className);
    return <Icon className={appliedClass} />;
};
