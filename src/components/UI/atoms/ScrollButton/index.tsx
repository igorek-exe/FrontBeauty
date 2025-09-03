import React, { useEffect, useState } from 'react';
import styles from './scrollButton.module.scss';

const ScrollButton: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50; // порог, после которого показываем кнопку
            const atBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

            setVisible(scrolled);
            setIsAtBottom(atBottom);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = () => {
        if (isAtBottom) {
            // если внизу → скроллим вверх
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // если не внизу → скроллим вниз
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
    };

    if (!visible) return null; // не рендерим кнопку, пока не начался скролл

    return (
        <button onClick={scrollTo} className={styles.scrollBtn}>
            {isAtBottom ? "⬆ Наверх" : "⬇ Вниз"}
        </button>
    );
};

export { ScrollButton };