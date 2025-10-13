import React from 'react';
import { cn } from '@/utils/UI/cn.ts';
import styles from './index.module.scss';
import type { IconSpriteProps } from '@/components';

export const IconSprite: React.FC<IconSpriteProps> = ({ name, classNames = {} }) => {
    return (
        <svg className={cn(styles, 'sprite-icon', classNames.iconClass)} aria-hidden="true">
            <use xlinkHref={`#icon-${name}`} />
        </svg>
    );
};
