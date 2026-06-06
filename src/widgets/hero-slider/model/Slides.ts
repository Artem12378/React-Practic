import chanelImg from './../assets/Chanel.jpg';
import cosmeticsAllImg from './../assets/CosmeticsAll.jpg';
import lancomeImg from './../assets/LancomeParis.jpg';
import nutritionImg from './../assets/Nutrition.jpg';
import optImg from './../assets/Opt.jpg';

export interface Slides {
    id: number;
    image: string;
    title: string;
    subtitle?: string;
    link?: string;
}

export const slides: Slides[] = [
    {
        id: 1,
        image: chanelImg,
        title: 'Новая коллекция',
        subtitle: 'Скидка 20% на первые заказы',
        link: '/catalog',
    },
    {
        id: 2,
        image: cosmeticsAllImg,
        title: 'Бестселлеры Misa',
        subtitle: 'Лаки и уход за кожей',
        link: '/bestsellers',
    },
    {
        id: 3,
        image: lancomeImg,
        title: 'Подарочные наборы',
        subtitle: 'Идеальный подарок',
        link: '/gifts',
    },
    {
        id: 4,
        image: nutritionImg,
        title: 'Подарочные наборы',
        subtitle: 'Идеальный подарок',
        link: '/gifts',
    },
    {
        id: 5,
        image: optImg,
        title: 'Подарочные наборы',
        subtitle: 'Идеальный подарок',
        link: '/gifts',
    },
];