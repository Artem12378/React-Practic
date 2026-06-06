import styles from './Header.module.css';
import { MisaSVG } from "../../../assets/MisaSVG.tsx";
import { FiMenu } from 'react-icons/fi';           // Каталог
import { FiZap } from 'react-icons/fi';            // Быстрый заказ
import { FiHeart } from 'react-icons/fi';          // Избранное
import { FiShoppingCart } from 'react-icons/fi';   // Корзина
import russiaIconUrl from './../../../assets/RussiaIcon.svg';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className={styles.header}>
            {/* Верхняя строка: только Страна и Вход | Регистрация */}
            <div className={styles.СountryAndAuth}>

                <div className={styles.HeaderCountry}>
                    <img src={russiaIconUrl} alt="Russia" width={15} height={15} />
                    <span>Россия</span>
                </div>
                <div className={styles.LogButton}>
                    <button onClick={() => console.log('Вход')}>Вход</button>
                    <span className="separator">|</span>
                    <button onClick={() => console.log('Регистрация')}>Регистрация</button>
                </div>
            </div>

            {/* Нижняя строка: логотип, поиск, навигация */}
            <div className={styles.bottomRow}>
                <Link to="/">
                    <MisaSVG className={styles.logo} />
                </Link>
                <input className={styles.HeaderInput} placeholder="Misa cosmetics..." />
                <div className={styles.navMenuHeader}>
                    <a><FiMenu /> Заказы</a>
                    <a><FiZap /> Избранное</a>
                    <a><FiHeart /> Профиль</a>
                    <a><FiShoppingCart /> Корзина</a>
                </div>
            </div>
        </header>
    );
};

export default Header;