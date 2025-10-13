import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { MenuProps } from '@/components';
import styles from './index.module.scss';
import { cn } from '@/utils/UI/cn.ts';

const defaultItems = [
    { label: 'Главная', path: '/' },
    { label: 'Контакты', path: '/contacts' },
    { label: 'Помощь', path: '/help' },
    { label: 'Отзывы', path: '/reviews' },
];

const Menu: React.FC<MenuProps> = ({ items = defaultItems }) => {
    const [activeItem, setActiveItem] = useState(items[0].label);

    return (
        <nav className={styles.nav}>
            {items.map((item) => (
                <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setActiveItem(item.label)}
                    className={cn(styles, 'navLink', activeItem === item.label ? 'active' : '')}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export { Menu };
