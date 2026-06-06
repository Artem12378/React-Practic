import * as SliderModule from 'react-slick';
const Slider = (SliderModule as any).default || SliderModule;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slides } from '../model/Slides';
import styles from './HeroSlider.module.css';

export const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: true,
        arrows: true,
    };

    // ✅ Обёртка для исправления импорта
    const SliderComponent = Slider.default || Slider;

    return (
        <section className={styles.sliderSection}>
            {/* ✅ Теперь используем SliderComponent вместо Slider */}
            <SliderComponent {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className={styles.slide}>
                        <img src={slide.image} alt={slide.title} className={styles.image} />
                        <div className={styles.overlay}>
                            <h2>{slide.title}</h2>
                            <p>{slide.subtitle}</p>
                            <a href={slide.link} className={styles.button}>Подробнее</a>
                        </div>
                    </div>
                ))}
            </SliderComponent>
        </section>
    );
};