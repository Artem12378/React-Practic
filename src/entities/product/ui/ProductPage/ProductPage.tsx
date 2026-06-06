import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';
import {ProductGallery} from "./ProductGallery/ProductGallery.tsx";
import FaberlickKrem1 from './../../assetsProduct/faberlicKrem1.jpg';
import FaberlickKrem2 from './../../assetsProduct/FaberlickKrem2.jpg';
import FaberlickKrem3 from './../../assetsProduct/FaberlickKrem3.jpg';
import FaberlickKrem4 from './../../assetsProduct/FaberlickKrem5.jpg';
import NightMisaCard1 from '../../assetsProduct/nkmisa1.jpg'
import NightMisaCard2 from '../../assetsProduct/nkmisa2.jpg'
import NightMisaCard3 from '../../assetsProduct/nkmisa3.jpg'
import NightMisaCard4 from '../../assetsProduct/nkmisa4.jpg'
import NightMisaCard5 from '../../assetsProduct/nkmisa5.jpg'
import NightMisaCard6 from '../../assetsProduct/nkmisa6.jpg'
import {useState} from "react";
import { FiHeart } from 'react-icons/fi';


const mockProducts = [
    {
        id: 1,
        images: [NightMisaCard1, NightMisaCard2, NightMisaCard3, NightMisaCard4,NightMisaCard5,NightMisaCard6], // массив
        title: 'Ночной крем для лица с ретинолом RETINOL night cream',
        brand: 'Misa',
        aticle:'0092',
        price: 1499,
        description: 'Ночной крем для лица RETINOL night cream дарит коже комплексный уход и омоложение.\n' +
            'Мягкая форма микроинкапсулированного ретинола проникает в глубокие слои кожи, повышает ее упругость, уменьшает мелкие и глубокие морщины, улучшает текстуру, выравнивает тон и помогает предотвратить следы постакне.\n' +
            'Также крем глубоко увлажняет, смягчает и успокаивает чувствительную кожу, предотвращая появление раздражения.\n' +
            'Мягкая форма ретинола обеспечивает деликатный домашний уход за любым типом кожи. Рекомендуем наносить на лицо, шею и зону декольте.\n' +
            'Просыпайтесь со здоровой, отдохнувшей и подтянутой кожей!\n' +
            '\n' +
            'Область применения: профессиональный и ежедневный домашний уход. Для лица, век, шеи и зоны декольте.\n' +
            '\n' +
            'Способ применения: использовать только в вечернее время, нанести крем на предварительно очищенную кожу, распределить до полного впитывания. Использовать 2-3 раза в неделю.\n' +
            '\n' +
            'Меры предосторожности: только для наружного применения. Избегать попадания в глаза. В случае попадания в глаза тщательно промыть водой. Возможна индивидуальная непереносимость компонентов. Хранить в недоступном для детей месте.\n' +
            '\n' +
            'Срок годности: 18 месяцев. Дата изготовления указана на упаковке. После вскрытия 4 месяца',
        structure: 'масло зародышей пшеницы; масло семян жожоба; масло отрубей посевного риса; цетеариловый спирт корня куркумы; глюкоза; масло ши; ретинол пальмитат; глицерин; этиловые эфиры ненасыщенных жирных кислот (линолевая кислота и линоленовая кислота); эфиры канделиллы/жожоба/рисовых отрубей; пантенол; масло листьев чайного дерева; бензойная кислота; гиалуроновая кислота; каприловый/каприновый триглицерид; масло бутироспермума парка; фермент метилрапсидата; Кандида бомбикола; цетеариловый глюкозид; каприлилгликоль',
        specifications:{
            actions:'Упругость',
            TimeUse:'Ночное время суток',
            ExpirationDate:'18 месяцев',
            Country:'Россия',
            Volume: 'Объем товара'
        },
        application: 'Использовать только в вечернее время, нанести крем на предварительно очищенную кожу, распределить до полного впитывания. Использовать 2-3 раза в неделю.',


    },
    {
        id: 2,
        images: [FaberlickKrem1, FaberlickKrem2,FaberlickKrem3,FaberlickKrem4], // если одно фото — тоже массив
        title: 'Сыворотка',
        brand: 'Oxiology',
        price: 2399,
        description: '...',
    },
];


const specLabels: Record<string, string> = {
    actions: 'Действие',
    TimeUse: 'Время нанесения',
    ExpirationDate: 'Срок годности',
    Country: 'Страна производства',
};


export const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id)
    const product = mockProducts.find(p => p.id === productId) || mockProducts[0];

    // Состояние для активной вкладки
    const [activeTab, setActiveTab] = useState<'description' | 'application' | 'structure' | 'specifications'>('description');

    // Функция рендера содержимого активной вкладки
    const renderTabContent = () => {
        switch (activeTab) {
            case 'description':
                return <div className={styles.tabContent}>{product.description}</div>;
            case 'application':
                return <div className={styles.tabContent}>{product.application || 'Информация отсутствует'}</div>;
            case 'structure':
                return <div className={styles.tabContent}>{product.structure}</div>;
            case 'specifications':
                return (
                    <div className={styles.tabContent}>
                        <ul className={styles.specsList}>
                            {Object.entries(product.specifications || {}).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{specLabels[key] || key}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };


    // теперь id используется (через productId)
    return (
        <>
        <div className={styles.page}>
            <div className={styles.galleryContainer}>
                <ProductGallery images={product.images} />
            </div>
            <div className={styles.info}>
                <h1>{product.title}</h1>
                <p className={styles.brand}>{product.brand}</p>
                <p className={styles.brand}>Артикул: {product.aticle}</p>
                <div className={styles.price}>{product.price} ₽</div>
                <div className={styles.actionButtons}>
                    <button className={styles.cartButton}>В корзину</button>
                    <button className={styles.favoriteButton} aria-label="В избранное">
                        <FiHeart size={24} />
                    </button>
                </div>
            </div>
        </div>
            <div className={styles.tabsContainer}>
                <div className={styles.tabsHeaders}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'description' ? styles.active : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Описание
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'application' ? styles.active : ''}`}
                        onClick={() => setActiveTab('application')}
                    >
                        Применение
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'structure' ? styles.active : ''}`}
                        onClick={() => setActiveTab('structure')}
                    >
                        Состав
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'specifications' ? styles.active : ''}`}
                        onClick={() => setActiveTab('specifications')}
                    >
                        Характеристики
                    </button>
                </div>
                <div className={styles.tabContentWrapper}>
                    {renderTabContent()}
                </div>
            </div>



        </>
    );
};