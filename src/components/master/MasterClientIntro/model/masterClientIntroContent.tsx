import styles from './index.module.scss';

const title = 'Бесплатный сервис для поиска клиентов';
const textLink = 'Присоединиться к сервису бесплатно';
const textDomen = '/master';
const desc = (
    <p className={styles.desc}>
        Ты мастер ногтевого сервиса или владелец бизнеса? Присоединяйся к нашей единой системе
        бронирования.
        <br />
        Прозрачные условия сотрудничества, удобный кабинет, уникальное сообщество и самые лояльные
        клиенты.
        <br />
        <br />
        Расширяй свой бизнес с нами!
    </p>
);

export { title, desc, textLink, textDomen };
