import styles from './Footer.module.css';



const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterContact}>
                <ul className={styles.FooterContactUl} >
                    <h1>Компания</h1>
                    <li>О Misa </li>
                    <li>Социальные проекты</li>
                    <li>Правовые документы</li>
                    <li>Контакты</li>
                </ul>

            </div>
            <div className={styles.FooterConsultWorker}>
                <ul className={styles.FooterWorkUl}>
                    <h1>Консультанту</h1>
                    <li>Новости </li>
                    <li>Смотреть каталог</li>
                    <li>Гид по продукции</li>
                    <li>Инструменты консультанта</li>
                    <li>Стартовая программа</li>
                    <li>Партнерство</li>
                </ul>

            </div>
            <div className={styles.FooterHelp}>
                <ul className={styles.FooterHelpUl}>
                    <h1>Помощь</h1>
                    <li>Вопросы и ответы </li>
                    <li>Как оформить заказ</li>
                    <li>Как зарегистрироваться</li>
                    <li>Способы оплаты</li>
                    <li>Доставка</li>
                    <li>Возврат</li>
                    <li>Пункты выдачи</li>
                    <li>Кибербезопасность</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;