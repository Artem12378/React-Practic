import { ProductCard } from '../../../entities/product/ui/ProductCard/ProductCard.tsx';
import styles from './ProductsRow.module.css';
import misaImg from './../../../assets/misa1.jpg';
import { useNavigate } from 'react-router-dom';

const mockProducts = [
    { id: 1, image: misaImg, title: 'Крем для лица', brand: 'Misa', price: 1499 },
    { id: 2, image: misaImg, title: 'Сыворотка', brand: 'Oxiology', price: 2399 },
    { id: 3, image: misaImg, title: 'Тоник', brand: 'Misa', price: 890 },
    { id: 4, image: misaImg, title: 'Маска для волос', brand: 'Lancôme', price: 1990 },
    { id: 5, image: misaImg, title: 'Пилинг', brand: 'Misa', price: 1290 }
];



export const ProductsRow = () => {
    const navigate = useNavigate();

    const handleAddToCart = (id: number) => {
        console.log('Add to cart', id);
    };

    const handleDetails = (id: number) => {
        navigate(`/product/${id}`);
    };


    return (
        <section className={styles.rowSection}>
            <h2 className={styles.title}>Рекомендуем</h2>
            <div className={styles.productsGrid}>
                {mockProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        brand={product.brand}
                        price={product.price}
                        onDetails={() => handleDetails(product.id)}
                        onAddToCart={() => handleAddToCart(product.id)}
                    />
                ))}
            </div>
        </section>
    );
};