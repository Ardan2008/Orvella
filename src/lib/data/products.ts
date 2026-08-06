export type ProductCategory = "Coffee" | "Non-Coffee" | "Food";

export type Product = {
    id: string;
    name: string;
    price: number;
    category: ProductCategory;
    rating: number;
    image: string;
    description: string;
};

export const products: Product[] = [
    {
        id: "caramel-latte",
        name: "Caramel Latte",
        price: 25000,
        category: "Coffee",
        rating: 4.8,
        image: "/bestSeller/01.png",
        description: "Espresso dengan karamel manis dan susu steamed lembut.",
    },
    {
        id: "cappuccino",
        name: "Cappuccino",
        price: 22000,
        category: "Coffee",
        rating: 4.8,
        image: "/bestSeller/01.png",
        description: "Perpaduan seimbang espresso, susu, dan foam tebal.",
    },
    {
        id: "espresso",
        name: "Espresso",
        price: 18000,
        category: "Coffee",
        rating: 4.5,
        image: "/bestSeller/01.png",
        description: "Shot espresso pekat dengan crema alami.",
    },
    {
        id: "vanilla-latte",
        name: "Vanilla Latte",
        price: 25000,
        category: "Coffee",
        rating: 4.5,
        image: "/bestSeller/01.png",
        description: "Latte lembut dengan aroma vanilla yang hangat.",
    },
    {
        id: "chocolate-mocha",
        name: "Chocolate Mocha",
        price: 26000,
        category: "Coffee",
        rating: 4.9,
        image: "/bestSeller/01.png",
        description: "Espresso, cokelat premium, dan steamed milk.",
    },
    {
        id: "matcha-cream",
        name: "Matcha Cream",
        price: 28000,
        category: "Non-Coffee",
        rating: 4.9,
        image: "/bestSeller/02.png",
        description: "Matcha premium dengan cream cheese lembut di atasnya.",
    },
    {
        id: "iced-lemon-tea",
        name: "Iced Lemon Tea",
        price: 20000,
        category: "Non-Coffee",
        rating: 4.3,
        image: "/bestSeller/02.png",
        description: "Teh segar dengan perasan lemon asli.",
    },
    {
        id: "strawberry-smoothie",
        name: "Strawberry Yogurt Smoothie",
        price: 27000,
        category: "Non-Coffee",
        rating: 4.2,
        image: "/bestSeller/02.png",
        description: "Smoothie yogurt dengan stroberi segar.",
    },
    {
        id: "butter-croissant",
        name: "Butter Croissant",
        price: 24000,
        category: "Food",
        rating: 4.4,
        image: "/bestSeller/02.png",
        description: "Croissant mentega, renyah di luar, lembut di dalam.",
    },
    {
        id: "avocado-toast",
        name: "Avocado Toast",
        price: 32000,
        category: "Food",
        rating: 4.8,
        image: "/bestSeller/02.png",
        description: "Roti panggang dengan alpukat segar dan telur.",
    },
];