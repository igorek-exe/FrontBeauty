import React from 'react';
import { cn } from '@/utils/cn';
import styles from './index.module.scss';
import type { ExternalLinkProps } from '@/components';

export const ExternalLink: React.FC<ExternalLinkProps> = ({
                                                              href,
                                                              children,
                                                              classNames = {},
                                                              target = '_blank',
                                                              rel = 'noopener noreferrer',
                                                          }) => {
    return (
        <a
            href={href}
            className={cn(styles, 'link', classNames.linkClass)}
            target={target}
            rel={rel}
        >
            {children}
        </a>
    );
};
