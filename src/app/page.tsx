"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { CartIcon, FilterIcon, Grid2x2Icon, LayoutListIcon, MagnifierIcon } from "@solar-icons/react/linear";
import Button from "@/components/Button";
import FilterDrawer from "@/components/FilterDrawer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { addToCart, decreaseProductQuantity, getCartSnapshot, getServerCartSnapshot, parseCart, subscribeToCart } from "@/lib/cart";

const PRODUCTS_PER_PAGE = 25;
const allProducts: Product[] = Object.values(products).flat();
const categories = [...new Set(allProducts.map((product) => product.category))];
const minPrice = Math.min(...allProducts.map((product) => product.price));
const maxPrice = Math.max(...allProducts.map((product) => product.price));
const subscribeToLocation = (callback: () => void) => {
    window.addEventListener("popstate", callback);
    return () => window.removeEventListener("popstate", callback);
};
const getCategoryFromLocation = () => new URLSearchParams(window.location.search).get("category") ?? "";
const getServerCategory = () => "";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryOverride, setCategoryOverride] = useState<string[] | null>(null);
    const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const requestedCategory = useSyncExternalStore(subscribeToLocation, getCategoryFromLocation, getServerCategory);
    const cartSnapshot = useSyncExternalStore(subscribeToCart, getCartSnapshot, getServerCartSnapshot);
    const cartItems = parseCart(cartSnapshot);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const filteredCategories = categoryOverride
        ?? (categories.includes(requestedCategory) ? [requestedCategory] : []);

    const normalizedSearchQuery = searchQuery.trim().toLocaleLowerCase("fa");
    const filteredProducts = allProducts.filter((product) =>
        (filteredCategories.length === 0 || filteredCategories.includes(product.category))
        && product.price >= priceRange[0]
        && product.price <= priceRange[1]
        && (!inStockOnly || product.stock > 0)
        && (normalizedSearchQuery.length === 0
            || product.title.toLocaleLowerCase("fa").includes(normalizedSearchQuery)
            || product.category.toLocaleLowerCase("fa").includes(normalizedSearchQuery)),
    );
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const visibleProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    const handlePageChange = (page: number) => {
        if (page === currentPage) return;

        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        });
    };

    return (
        <>
            <Header
                title="محصولات"
                titleAsHeading
                leftButton={(
                    <Link
                        href="/cart"
                        aria-label={`سبد خرید، ${cartCount.toLocaleString("fa-IR")} کالا`}
                        className="relative flex size-11 shrink-0 items-center justify-center rounded-full text-content-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
                    >
                        <CartIcon className="size-6" aria-hidden="true" />
                        {cartCount > 0 && <span className="absolute -top-1 -left-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-label-xs text-content-on-brand" aria-hidden="true">{cartCount.toLocaleString("fa-IR")}</span>}
                    </Link>
                )}
            >
                <Input
                    type="search"
                    appearance="gray"
                    wrapperClassName="lg:max-w-md"
                    placeholder="جست‌وجوی محصولات"
                    startIcon={<MagnifierIcon />}
                    value={searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event.currentTarget.value);
                        setCurrentPage(1);
                    }}
                />
            </Header>
            <main className="mx-auto w-full max-w-[1440px] px-6 pb-8 pt-36 text-content-primary sm:px-8 lg:px-12 xl:px-16">
                <div className="lg:grid lg:grid-cols-12 lg:gap-4">
                    <FilterDrawer
                        categories={categories}
                        filteredCategories={filteredCategories}
                        onFilteredCategoriesChange={(nextCategories) => {
                            setCategoryOverride(nextCategories);
                            setCurrentPage(1);
                        }}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        priceRange={priceRange}
                        onPriceRangeChange={(nextRange) => {
                            setPriceRange(nextRange);
                            setCurrentPage(1);
                        }}
                        inStockOnly={inStockOnly}
                        onInStockOnlyChange={(nextValue) => {
                            setInStockOnly(nextValue);
                            setCurrentPage(1);
                        }}
                        resultCount={filteredProducts.length}
                        isOpen={isFilterOpen}
                        onClose={() => setIsFilterOpen(false)}
                        onReset={() => {
                            setCategoryOverride([]);
                            setPriceRange([minPrice, maxPrice]);
                            setInStockOnly(false);
                            setCurrentPage(1);
                        }}
                    />
                    <section aria-label="فهرست محصولات" className="min-w-0 lg:col-span-9">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <div className="lg:hidden">
                                <Button variant="secondary" appearance="outline" size="sm" startIcon={<FilterIcon />} aria-haspopup="dialog" aria-expanded={isFilterOpen} onClick={() => setIsFilterOpen(true)}>
                                    فیلترها
                                </Button>
                            </div>
                            <div role="group" aria-label="نحوه نمایش محصولات" className="flex w-fit flex-row-reverse gap-1 rounded-full bg-surface-secondary p-1">
                                <button
                                    type="button"
                                    aria-label="نمایش شبکه‌ای"
                                    aria-pressed={viewMode === "grid"}
                                    onClick={() => setViewMode("grid")}
                                    className={`flex size-10 items-center justify-center rounded-full text-content-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus motion-reduce:transition-none ${viewMode === "grid" ? "bg-surface-primary" : "hover:bg-surface-tertiary"}`}
                                >
                                    <Grid2x2Icon className="size-5" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    aria-label="نمایش فهرستی"
                                    aria-pressed={viewMode === "list"}
                                    onClick={() => setViewMode("list")}
                                    className={`flex size-10 items-center justify-center rounded-full text-content-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus motion-reduce:transition-none ${viewMode === "list" ? "bg-surface-primary" : "hover:bg-surface-tertiary"}`}
                                >
                                    <LayoutListIcon className="size-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    {visibleProducts.length > 0 ? (
                        <ul
                            className={viewMode === "grid"
                                ? "grid auto-rows-fr grid-cols-1 gap-2 min-[375px]:grid-cols-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-5"
                                : "grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4"}
                        >
                            {visibleProducts.map((product) => (
                                <li key={product.slug} className="min-w-0">
                                    <ProductCard
                                        className="h-full"
                                        kind={viewMode === "list" ? "cart" : "default"}
                                        title={product.title}
                                        price={product.price}
                                        image={product.images[0].src}
                                        imageAlt={product.images[0].alt}
                                        href={`/products/${product.slug}`}
                                        inStock={product.stock > 0}
                                        oldPrice={product.oldPrice}
                                        discountPercent={product.discountPercent}
                                        stock={product.stock}
                                        cartQuantity={cartItems.reduce((total, item) => item.slug === product.slug ? total + item.quantity : total, 0)}
                                        onAddToCart={() => addToCart({
                                            slug: product.slug,
                                            title: product.title,
                                            price: product.price,
                                            oldPrice: product.oldPrice,
                                            discountPercent: product.discountPercent,
                                            image: product.images[0].src,
                                            imageAlt: product.images[0].alt,
                                            stock: product.stock,
                                            color: product.colors[0],
                                            size: product.sizes?.[0],
                                        })}
                                        onDecreaseFromCart={() => decreaseProductQuantity(product.slug, product.colors[0], product.sizes?.[0])}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="py-8 text-center text-content-secondary">محصولی با این فیلترها پیدا نشد.</p>
                    )}
                    {totalPages > 1 && (
                        <nav aria-label="صفحه‌بندی محصولات" className="flex flex-wrap items-center justify-center gap-2 pt-4">
                            <Button
                                variant="secondary"
                                appearance="outline"
                                size="sm"
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            >
                                صفحه قبل
                            </Button>
                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                <Button
                                    key={page}
                                    variant="secondary"
                                    appearance={currentPage === page ? "filled" : "outline"}
                                    size="sm"
                                    iconOnly
                                    aria-label={`صفحه ${page.toLocaleString("fa-IR")}`}
                                    aria-current={currentPage === page ? "page" : undefined}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page.toLocaleString("fa-IR")}
                                </Button>
                            ))}
                            <Button
                                variant="secondary"
                                appearance="outline"
                                size="sm"
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            >
                                صفحه بعد
                            </Button>
                        </nav>
                    )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default Home;
