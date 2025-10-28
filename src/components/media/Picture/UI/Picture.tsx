import React from 'react';
import styles from './index.module.scss';
import { cn } from '@/utils/UI/cn.ts';
import type { PictureProps } from '@/components/media/Picture/index.model.ts';

export const Picture: React.FC<PictureProps> = ({ src, alt, className }) => {
    const appliedClass = className ? cn(styles, className) : '';
    return <img src={src} alt={alt} className={appliedClass} />;
};
