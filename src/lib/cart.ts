export type CartItem = {
    id: string;
    slug: string;
    title: string;
    price: number;
    oldPrice?: number;
    discountPercent?: number;
    image: string;
    imageAlt: string;
    stock: number;
    color?: string;
    size?: string;
    quantity: number;
};

const cartKey = "metanegar-cart";
const cartEvent = "metanegar-cart-change";

export const getCartSnapshot = () => window.localStorage.getItem(cartKey) ?? "[]";
export const getServerCartSnapshot = () => "null";

export const subscribeToCart = (callback: () => void) => {
    window.addEventListener("storage", callback);
    window.addEventListener(cartEvent, callback);

    return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener(cartEvent, callback);
    };
};

export const parseCart = (snapshot: string): CartItem[] => {
    try {
        const items: unknown = JSON.parse(snapshot);
        return Array.isArray(items) ? items.filter((item): item is CartItem =>
            typeof item === "object" && item !== null
            && typeof item.id === "string"
            && typeof item.slug === "string"
            && typeof item.title === "string"
            && typeof item.price === "number"
            && typeof item.image === "string"
            && typeof item.imageAlt === "string"
            && typeof item.stock === "number"
            && typeof item.quantity === "number",
        ) : [];
    } catch {
        return [];
    }
};

const saveCart = (items: CartItem[]) => {
    window.localStorage.setItem(cartKey, JSON.stringify(items));
    window.dispatchEvent(new Event(cartEvent));
};

export const addToCart = (item: Omit<CartItem, "id" | "quantity">) => {
    if (item.stock <= 0) return;

    const id = JSON.stringify([item.slug, item.color, item.size]);
    const items = parseCart(getCartSnapshot());
    const productQuantity = items.reduce((total, entry) => entry.slug === item.slug ? total + entry.quantity : total, 0);

    if (productQuantity >= item.stock) return;

    const existing = items.find((entry) => entry.id === id);

    if (existing) {
        saveCart(items.map((entry) => entry.id === id
            ? { ...item, id, quantity: Math.min(entry.quantity + 1, item.stock) }
            : entry));
    } else {
        saveCart([...items, { ...item, id, quantity: 1 }]);
    }
};

export const setCartQuantity = (id: string, quantity: number) => {
    const items = parseCart(getCartSnapshot());
    const selectedItem = items.find((item) => item.id === id);

    if (!selectedItem) return;

    const otherQuantity = items.reduce((total, item) => item.slug === selectedItem.slug && item.id !== id ? total + item.quantity : total, 0);
    const nextQuantity = Math.min(quantity, Math.max(0, selectedItem.stock - otherQuantity));

    saveCart(items.flatMap((item) => item.id !== id
        ? [item]
        : nextQuantity <= 0 ? [] : [{ ...item, quantity: nextQuantity }],
    ));
};

export const decreaseProductQuantity = (slug: string, color?: string, size?: string) => {
    const items = parseCart(getCartSnapshot());
    const item = items.find((entry) => entry.slug === slug && entry.color === color && entry.size === size)
        ?? items.find((entry) => entry.slug === slug);

    if (item) setCartQuantity(item.id, item.quantity - 1);
};
