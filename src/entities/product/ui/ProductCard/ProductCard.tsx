import styles from './ProductCard.module.css';

interface ProductCardProps {
    image: string;
    title: string;
    brand: string;
    price: number;
    onAddToCart: () => void;
    onDetails: () => void;   // новый пропс
}

export const ProductCard = ({ image, title, brand, price, onAddToCart, onDetails }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
                <button className={styles.detailsButton} onClick={onDetails}>
                    Подробнее
                </button>
            </div>
            <div className={styles.info}>
                <div className={styles.price}>{price.toLocaleString()} ₽</div>
                <div className={styles.brand}>{brand}</div>
                <button className={styles.addButton} onClick={onAddToCart}>
                    В корзину
                </button>
            </div>
        </div>
    );
};