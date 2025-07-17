import ramenImg from '../assets/images/ramen.jpg';
import sushiImg from '../assets/images/sushi.jpg';
import omuriceImg from '../assets/images/omurice.jpg';
import onigiriImg from '../assets/images/onigiri.jpg';
import yakinikuImg from '../assets/images/yakiniku.jpg';
import sashimiImg from '../assets/images/sashimi.jpg';
import udonImg from '../assets/images/udon.jpg';

export const PopularMenus = [
    {
        id: 1,
        name: 'Ramen',
        image: ramenImg,
        numberOfOrders: 120,
    },
    {
        id: 2,
        name: 'Sushi',
        image: sushiImg,
        numberOfOrders: 140,
    },
    {
        id: 3,
        name: 'Omurice',
        image: omuriceImg,
        numberOfOrders: 100,
    },
    {
        id: 4,
        name: 'Onigiri',
        image: onigiriImg,
        numberOfOrders: 80,
    },
    {
        id: 5,
        name: 'Yakiniku',
        image: yakinikuImg,
        numberOfOrders: 90,
    },
    {
        id: 6,
        name: 'Sashimi',
        image: sashimiImg,
        numberOfOrders: 110,
    },
    {
        id: 7,
        name: 'Udon',
        image: udonImg,
        numberOfOrders: 130,
    },
];

export const tables = [
    {
        id: 1,
        name: 'Table 1',
        status: 'Booked',
        initial: 'MA',
        seats: 4,
    },
    {
        id: 2,
        name: 'Table 2',
        status: 'Available',
        initial: 'XX',
        seats: 2,
    },
    {
        id: 3,
        name: 'Table 3',
        status: 'Booked',
        initial: 'JK',
        seats: 6,
    },
    {
        id: 4,
        name: 'Table 4',
        status: 'Available',
        initial: 'XX',
        seats: 4,
    },
    {
        id: 5,
        name: 'Table 5',
        status: 'Booked',
        initial: 'RS',
        seats: 6,
    },
    {
        id: 6,
        name: 'Table 6',
        status: 'Available',
        initial: 'XX',
        seats: 2,
    },
    {
        id: 7,
        name: 'Table 7',
        status: 'Booked',
        initial: 'AB',
        seats: 4,
    },
    {
        id: 8,
        name: 'Table 8',
        status: 'Available',
        initial: 'XX',
        seats: 2,
    },
    {
        id: 9,
        name: 'Table 9',
        status: 'Booked',
        initial: 'CD',
        seats: 6,
    },
    {
        id: 10,
        name: 'Table 10',
        status: 'Available',
        initial: 'XX',
        seats: 4,
    },
    {
        id: 11,
        name: 'Table 11',
        status: 'Booked',
        initial: 'EF',
        seats: 6,
    },
    {
        id: 12,
        name: 'Table 12',
        status: 'Available',
        initial: 'XX',
        seats: 2,
    },
    {
        id: 13,
        name: 'Table 13',
        status: 'Booked',
        initial: 'GH',
        seats: 4,
    },
    {
        id: 14,
        name: 'Table 14',
        status: 'Available',
        initial: 'XX',
        seats: 2,
    },
    {
        id: 15,
        name: 'Table 15',
        status: 'Booked',
        initial: 'IJ',
        seats: 6,
    },
    {
        id: 16,
        name: 'Table 16',
        status: 'Available',
        initial: 'XX',
        seats: 4,
    },
];

export const ramen = [
    {
        id: 1,
        name: 'Shoyu Ramen',
        description: 'A classic soy sauce-based ramen with pork, bamboo shoots, and green onions.',
        price: 12000,
        category: 'Non-Vegetarian',
    },
    {
        id: 2,
        name: 'Miso Ramen',
        description: 'Rich miso broth with corn, butter, and a soft-boiled egg.',
        price: 13000,
        category: 'Non-Vegetarian',
    },
    {
        id: 3,
        name: 'Tonkotsu Ramen',
        description: 'Creamy pork bone broth with chashu, nori, and scallions.',
        price: 14000,
        category: 'Non-Vegetarian',
    },
    {
        id: 4,
        name: 'Spicy Ramen',
        description: 'Spicy miso broth with chili oil, ground pork, and bok choy.',
        price: 15000,
        category: 'Non-Vegetarian',
    },
];

export const sushi = [
    {
        id: 1,
        name: 'California Roll',
        description: 'A sushi roll with crab meat, avocado, and cucumber.',
        price: 8000,
        category: 'Non-Vegetarian',
    },
    {
        id: 2,
        name: 'Spicy Tuna Roll',
        description: 'Spicy tuna with cucumber and avocado wrapped in seaweed.',
        price: 9000,
        category: 'Non-Vegetarian',
    },
    {
        id: 3,
        name: 'Salmon Nigiri',
        description: 'Fresh salmon on top of vinegared rice.',
        price: 7000,
        category: 'Non-Vegetarian',
    },
    {
        id: 4,
        name: 'Vegetable Roll',
        description: 'A vegetarian sushi roll with assorted vegetables.',
        price: 6000,
        category: 'Vegetarian',
    },
    {
        id: 5,
        name: 'Ebi Nigiri',
        description: 'Shrimp nigiri with a touch of wasabi.',
        price: 7500,
        category: 'Non-Vegetarian',
    },
    {
        id: 6,
        name: 'Unagi Nigiri',
        description: 'Grilled eel on top of vinegared rice with a sweet sauce.',
        price: 8500,
        category: 'Non-Vegetarian',
    },
];

export const omurice = [
    {
        id: 1,
        name: 'Chicken Omurice',
        description: 'Omurice with chicken and ketchup.',
        price: 10000,
        category: 'Non-Vegetarian',
    },
    {
        id: 2,
        name: 'Vegetable Omurice',
        description: 'Omurice with mixed vegetables.',
        price: 9000,
        category: 'Vegetarian',
    },
    {
        id: 3,
        name: 'Beef Omurice',
        description: 'Omurice with tender beef and a rich sauce.',
        price: 11000,
        category: 'Non-Vegetarian',
    },
    {
        id: 4,
        name: 'Seafood Omurice',
        description: 'Omurice with shrimp and squid in a savory sauce.',
        price: 12000,
        category: 'Non-Vegetarian',
    },
];

export const onigiri = [
    {
        id: 1,
        name: 'Salmon Onigiri',
        description: 'Rice ball with grilled salmon.',
        price: 5000,
        category: 'Non-Vegetarian',
    },
    {
        id: 2,
        name: 'Pickled Plum Onigiri',
        description: 'Rice ball with pickled plum filling.',
        price: 4000,
        category: 'Vegetarian',
    },
    {
        id: 3,
        name: 'Tuna Mayo Onigiri',
        description: 'Rice ball with tuna mayo filling.',
        price: 6000,
        category: 'Non-Vegetarian',
    },
    {
        id: 4,
        name: 'Seaweed Onigiri',
        description: 'Rice ball wrapped in seaweed with sesame seeds.',
        price: 4500,
        category: 'Vegetarian',
    },
    {
        id: 5,
        name: 'Chicken Teriyaki Onigiri',
        description: 'Rice ball with chicken teriyaki filling.',
        price: 7000,
        category: 'Non-Vegetarian',
    },
    {
        id: 6,
        name: 'Vegetable Onigiri',
        description: 'Rice ball with assorted vegetables.',
        price: 5500,
        category: 'Vegetarian',
    },
];

export const yakiniku = [
    {
        id: 1,
        name: 'Beef Yakiniku',
        description: 'Grilled beef with a savory sauce.',
        price: 15000,
        category: 'Non-Vegetarian',
    },
    {
        id: 2,
        name: 'Pork Yakiniku',
        description: 'Grilled pork with a sweet sauce.',
        price: 14000,
        category: 'Non-Vegetarian',
    },
    {
        id: 3,
        name: 'Vegetable Yakiniku',
        description: 'Grilled assorted vegetables with a tangy sauce.',
        price: 12000,
        category: 'Vegetarian',
    },
    {
        id: 4,
        name: 'Chicken Yakiniku',
        description: 'Grilled chicken with a rich marinade.',
        price: 13000,
        category: 'Non-Vegetarian',
    },
];

export const sashimi = [
    {
        id: 1,
        name: 'Tuna Sashimi',
        description: 'Fresh tuna slices served with soy sauce and wasabi.',
        price: 12000,
        category: 'Non-Vegetarian',
    },
    {
        id: 2,
        name: 'Salmon Sashimi',
        description: 'Fresh salmon slices served with soy sauce and wasabi.',
        price: 11000,
    },
    {
        id: 3,
        name: 'Octopus Sashimi',
        description: 'Tender octopus slices served with soy sauce.',
        price: 13000,
        category: 'Non-Vegetarian',
    },
    {
        id: 4,
        name: 'Vegetable Sashimi',
        description: 'Assorted fresh vegetables served sashimi-style.',
        price: 8000,
        category: 'Vegetarian',
    },
];

export const beverages = [
    {
        id: 1,
        name: 'Matcha Tea',
        description: 'Refreshing matcha tea with a hint of sweetness.',
        price: 3000,
        category: 'Beverage',
    },
    {
        id: 2,
        name: 'Soda',
        description: 'Chilled soda in various flavors.',
        price: 4000,
        category: 'Beverage',
    },
    {
        id: 3,
        name: 'Iced Coffee',
        description: 'Rich iced coffee with a hint of sweetness.',
        price: 5000,
        category: 'Beverage',
    },
    {
        id: 4,
        name: 'Fruit Juice',
        description: 'Freshly squeezed fruit juice.',
        price: 6000,
        category: 'Beverage',
    },
    {
        id: 5,
        name: 'Green Tea',
        description: 'Traditional green tea served hot or cold.',
        price: 2500,
        category: 'Beverage',
    },
    {
        id: 6,
        name: 'Ramune',
        description: 'Japanese carbonated soft drink with a unique bottle.',
        price: 3500,
        category: 'Beverage',
    },
    {
        id: 7,
        name: 'Japanese Beer',
        description: 'Refreshing Japanese beer, perfect for pairing with meals.',
        price: 7000,
        category: 'Beverage',
    },
    {
        id: 8,
        name: 'Sake',
        description: 'Traditional Japanese rice wine, served warm or cold.',
        price: 8000,
        category: 'Beverage',
    },
    {
        id: 9,
        name: 'Chai Latte',
        description: 'Spiced chai latte with steamed milk.',
        price: 4500,
        category: 'Beverage',
    },
    {
        id: 10,
        name: 'Lemonade',
        description: 'Homemade lemonade with a refreshing citrus flavor.',
        price: 4000,
        category: 'Beverage',
    },
];

export const menus = [
    {
        id: 1,
        name: 'Ramen',
        icon: '🍜',
        color: '#4b0400',
        items: ramen,
    },
    {
        id: 2,
        name: 'Sushi',
        icon: '🍣',
        color: '#101e39',
        items: sushi,
    },
    {
        id: 3,
        name: 'Omurice',
        icon: '🍳',
        color: '#e7472f',
        items: omurice,
    },
    {
        id: 4,
        name: 'Onigiri',
        icon: '🍙',
        color: '#224058',
        items: onigiri,
    },
    {
        id: 5,
        name: 'Yakiniku',
        icon: '🥩',
        color: '#e12534',
        items: yakiniku,
    },
    {
        id: 6,
        name: 'Sashimi',
        icon: '🐟',
        color: '#545245',
        items: sashimi,
    },
    {
        id: 7,
        name: 'Beverages',
        icon: '🥤',
        color: '#253974',
        items: beverages,
    },
]