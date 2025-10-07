import React from 'react';
import styles from './index.module.scss';
import { cn } from '@/utils/cn';
import type { PictureProps } from '@/components';

export const Picture: React.FC<PictureProps> = ({ src, alt, className }) => {
    const appliedClass = cn(styles, 'picture', className);
    return <img src={src} alt={alt} className={appliedClass} />;
};
