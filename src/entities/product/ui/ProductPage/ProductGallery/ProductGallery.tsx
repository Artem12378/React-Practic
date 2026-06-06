import { useState } from 'react';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
    images: string[];   // массив URL изображений
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className={styles.gallery}>
            <div className={styles.thumbnails}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={styles.thumbnail}
                        onMouseEnter={() => setCurrentImage(img)}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className={styles.mainImage}>
                <img src={currentImage} alt="Product" />
            </div>
        </div>
    );
};