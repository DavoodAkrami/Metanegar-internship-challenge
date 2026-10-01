"use client";

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    AltArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    Bag2Icon,
    CartIcon,
    ChatDotsIcon,
    ClipboardTextIcon,
    DocumentTextIcon,
    Palette2Icon,
    RulerIcon,
    TagPriceIcon,
} from "@solar-icons/react/linear";
import { useId, useState, useSyncExternalStore } from "react";
import type React from "react";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import ProductImageGallery from "@/components/ProductImageGallery";
import QuantityControl from "@/components/QuantityControl";
import { addToCart, decreaseProductQuantity, getCartSnapshot, getServerCartSnapshot, parseCart, subscribeToCart } from "@/lib/cart";

export type ProductDetailPageProps = {
    slug?: string;
    title: string;
    category?: string;
    price?: number;
    oldPrice?: number;
    discountPercent?: number;
    description?: string;
    images: { src: string; alt: string }[];
    Specifications: { key: string; value: string }[];
    colors?: string[];
    sizes?: string[];
    stock: number;
    comments?: { author: string; commentText: string; stars: number };
    onAddToCart?: (selection: { color?: string; size?: string }) => void;
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
    slug,
    title,
    category,
    price,
    oldPrice,
    discountPercent,
    description,
    images,
    Specifications,
    colors,
    sizes,
    stock,
    comments,
    onAddToCart,
}) => {
    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [showAllSpecifications, setShowAllSpecifications] = useState(false);
    const cartSnapshot = useSyncExternalStore(subscribeToCart, getCartSnapshot, getServerCartSnapshot);
    const cartItems = parseCart(cartSnapshot);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const productQuantity = cartItems.reduce((total, item) => item.slug === slug ? total + item.quantity : total, 0);
    const variantGroupId = useId();
    const specificationsId = useId();

    const currentColor = selectedColor !== null && colors?.includes(selectedColor) ? selectedColor : colors?.[0];
    const currentSize = selectedSize !== null && sizes?.includes(selectedSize) ? selectedSize : sizes?.[0];
    const inStock = stock > 0;
    const visibleSpecifications = showAllSpecifications ? Specifications : Specifications.slice(0, 3);
    const commentCount = comments ? 1 : 0;
    const averageStars = comments ? comments.stars / commentCount : 0;

    const handleAddToCart = () => {
        if (slug && price !== undefined && images[0]) {
            addToCart({
                slug,
                title,
                price,
                oldPrice,
                discountPercent,
                image: images[0].src,
                imageAlt: images[0].alt,
                stock,
                color: currentColor,
                size: currentSize,
            });
        }
        onAddToCart?.({ color: currentColor, size: currentSize });
    };

    const handleDecreaseFromCart = () => {
        if (slug) decreaseProductQuantity(slug, currentColor, currentSize);
    };

    const handleViewAllSpecifications = () => {
        document.getElementById("specifications-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main className="mx-auto w-full max-w-[1440px] px-6 pt-24 pb-[calc(14rem+env(safe-area-inset-bottom))] text-content-primary sm:px-8 lg:px-12 lg:pb-16 xl:px-16">
            <Header
                title="جزئیات محصول"
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
                rightButton={(
                    <button
                        type="button"
                        onClick={() => router.back()}
                        aria-label="بازگشت"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full text-content-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
                    >
                        <ArrowRightIcon className="size-6" aria-hidden="true" />
                    </button>
                )}
            />
            <Breadcrumb items={[
                { label: "خانه", href: "/" },
                ...(category ? [{ label: category, href: { pathname: "/", query: { category } } }] : []),
                { label: title },
            ]} />

            <div className="grid min-w-0 gap-y-8 lg:grid-cols-12 lg:gap-x-4">
                {images.length > 0 && (
                    <div className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-1">
                        <ProductImageGallery images={images} />
                        <h1 className="mt-4 text-headline-sm break-words sm:text-headline-md lg:hidden">{title}</h1>
                        <hr aria-hidden="true" className="-mx-6 mt-6 h-2 w-auto border-0 bg-surface-tertiary sm:-mx-8 lg:hidden" />
                    </div>
                )}

                <section
                    aria-label="اطلاعات و گزینه‌های محصول"
                    className={clsx(
                        "min-w-0 space-y-6 lg:row-start-1",
                        images.length > 0 ? "lg:col-span-4 lg:col-start-6" : "lg:col-span-9 lg:col-start-1",
                    )}
                >
                    <div className="space-y-3">
                        <h1 className={clsx("break-words", images.length > 0 ? "hidden lg:block lg:text-headline-lg" : "text-headline-sm sm:text-headline-md")}>{title}</h1>
                        {description && <p className="hidden text-body-sm text-content-secondary lg:line-clamp-3">{description}</p>}
                    </div>

                    {colors && colors.length > 0 && (
                        <fieldset className="space-y-3">
                            <legend className="text-headline-xs">
                                <span className="inline-flex items-center gap-2">
                                    <Palette2Icon className="size-5" aria-hidden="true" />
                                    رنگ محصول:
                                </span>
                            </legend>
                            <div className="flex flex-wrap gap-2">
                                {colors.map((color, index) => (
                                    <label key={`${color}-${index}`} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name={`${variantGroupId}-color`}
                                            value={color}
                                            checked={currentColor === color}
                                            onChange={() => setSelectedColor(color)}
                                            className="peer sr-only"
                                        />
                                        <span className={clsx(
                                            "inline-flex min-h-11 items-center rounded-full border bg-surface-primary px-4 py-2 text-label-sm peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-focus",
                                            currentColor === color ? "border-2 border-border-selected" : "border-border-primary",
                                        )}>
                                            {color}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    )}

                    {sizes && sizes.length > 0 && (
                        <fieldset className="space-y-3">
                            <legend className="text-headline-xs">
                                <span className="inline-flex items-center gap-2">
                                    <RulerIcon className="size-5" aria-hidden="true" />
                                    سایز محصول:
                                </span>
                            </legend>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map((size, index) => (
                                    <label key={`${size}-${index}`} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name={`${variantGroupId}-size`}
                                            value={size}
                                            checked={currentSize === size}
                                            onChange={() => setSelectedSize(size)}
                                            className="peer sr-only"
                                        />
                                        <span className={clsx(
                                            "inline-flex min-h-11 items-center rounded-full border bg-surface-primary px-4 py-2 text-label-sm peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-focus",
                                            currentSize === size ? "border-2 border-border-selected" : "border-border-primary",
                                        )}>
                                            {size}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    )}
                    {Boolean(colors?.length || sizes?.length) && (
                        <hr aria-hidden="true" className="-mx-6 h-2 w-auto border-0 bg-surface-tertiary sm:-mx-8 lg:hidden" />
                    )}
                    {Specifications.length > 0 && (
                        <div className="hidden space-y-3 lg:block">
                            <h2 className="text-headline-sm">مشخصات محصول</h2>
                            <div className="grid grid-cols-3 gap-3">
                                {Specifications.slice(0, 3).map((specification, index) => (
                                    <dl key={`${specification.key}-${index}`} className="min-w-0 rounded-2xl bg-surface-tertiary p-3">
                                        <dt className="text-body-sm text-content-secondary">{specification.key}</dt>
                                        <dd className="mt-2 break-words text-label-sm">{specification.value}</dd>
                                    </dl>
                                ))}
                            </div>
                            <Button
                                type="button"
                                variant="secondary"
                                appearance="outline"
                                size="sm"
                                className="mx-auto hidden lg:flex lg:w-fit"
                                endIcon={<ArrowLeftIcon />}
                                onClick={handleViewAllSpecifications}
                            >
                                مشاهده همه مشخصات
                            </Button>
                        </div>
                    )}
                </section>

                <aside
                    aria-labelledby="purchase-heading"
                    className="hidden self-start rounded-2xl border border-border-primary bg-surface-primary p-4 lg:sticky lg:top-24 lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-1 lg:block"
                >
                    <div className="space-y-4">
                        <h2 id="purchase-heading" className="flex items-center gap-2 text-headline-sm">
                            <Bag2Icon className="size-5 shrink-0" aria-hidden="true" />
                            خرید محصول
                        </h2>
                        {price !== undefined && (
                            <div className="space-y-2">
                                {oldPrice !== undefined && (
                                    <p className="text-body-sm text-content-secondary">
                                        <span className="sr-only">قیمت قبلی: </span>
                                        <del>{oldPrice.toLocaleString("fa-IR")} تومان</del>
                                    </p>
                                )}
                                {discountPercent !== undefined && discountPercent > 0 && (
                                    <p className="text-body-sm text-content-positive">{discountPercent.toLocaleString("fa-IR")}٪ تخفیف</p>
                                )}
                                <p className="flex items-center gap-2 text-headline-sm">
                                    <TagPriceIcon className="size-5 shrink-0" aria-hidden="true" />
                                    <span className="sr-only">قیمت: </span>
                                    {price.toLocaleString("fa-IR")} تومان
                                </p>
                                {productQuantity > 0 && (
                                    <QuantityControl
                                        title={title}
                                        quantity={productQuantity}
                                        max={stock}
                                        onIncrease={handleAddToCart}
                                        onDecrease={handleDecreaseFromCart}
                                    />
                                )}
                            </div>
                        )}
                        <Button
                            variant={!inStock && productQuantity === 0 ? "secondary" : "primary"}
                            appearance={!inStock && productQuantity === 0 ? "outline" : "filled"}
                            fullWidth
                            disabled={productQuantity === 0 && !inStock}
                            onClick={productQuantity > 0 ? () => router.push("/cart") : handleAddToCart}
                            startIcon={productQuantity > 0 ? <CartIcon /> : inStock ? <Bag2Icon /> : undefined}
                        >
                            {productQuantity > 0 ? `سبد خرید (${cartCount.toLocaleString("fa-IR")})` : inStock ? "افزودن به سبد خرید" : "ناموجود"}
                        </Button>
                    </div>
                </aside>

                <div className="min-w-0 space-y-8 lg:col-span-9 lg:col-start-1 lg:row-start-2">
                    {description && (
                        <section aria-labelledby="description-heading" className="space-y-4">
                            <h2 id="description-heading" className="flex items-center gap-2 text-headline-sm">
                                <DocumentTextIcon className="size-6 shrink-0" aria-hidden="true" />
                                توضیحات محصول
                            </h2>
                            <p className="text-body-md whitespace-pre-line text-content-secondary">{description}</p>
                            <hr aria-hidden="true" className="-mx-6 h-2 w-auto border-0 bg-surface-tertiary sm:-mx-8 lg:hidden" />
                        </section>
                    )}

                    {Specifications.length > 0 && (
                        <section aria-labelledby="specifications-heading" className="space-y-4">
                            <h2 id="specifications-heading" className="scroll-mt-24 flex items-center gap-2 text-headline-sm">
                                <ClipboardTextIcon className="size-6 shrink-0" aria-hidden="true" />
                                مشخصات محصول
                            </h2>
                            <ul id={specificationsId} className="list-inside list-disc space-y-3 marker:text-content-primary">
                                {visibleSpecifications.map((specification, index) => (
                                    <li key={`${specification.key}-${index}`} className="text-body-sm break-words">
                                        <span className="text-label-sm">{specification.key}</span>: {specification.value}
                                    </li>
                                ))}
                            </ul>
                            {Specifications.length > 3 && (
                                <button
                                    type="button"
                                    onClick={() => setShowAllSpecifications((current) => !current)}
                                    aria-expanded={showAllSpecifications}
                                    aria-controls={specificationsId}
                                    className="mx-auto flex min-h-11 items-center gap-2 rounded-full px-4 text-label-md text-content-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
                                >
                                    {showAllSpecifications ? "نمایش کمتر" : "نمایش بیشتر"}
                                    <AltArrowDownIcon className={clsx("size-4 transition-transform motion-reduce:transition-none", showAllSpecifications && "rotate-180")} aria-hidden="true" />
                                </button>
                            )}
                            <hr aria-hidden="true" className="-mx-6 h-2 w-auto border-0 bg-surface-tertiary sm:-mx-8 lg:hidden" />
                        </section>
                    )}

                    {comments && (
                        <section aria-labelledby="comments-heading" className="space-y-4">
                            <div className="flex flex-wrap items-baseline gap-3">
                                <h2 id="comments-heading" className="flex items-center gap-2 text-headline-sm">
                                    <ChatDotsIcon className="size-6 shrink-0" aria-hidden="true" />
                                    دیدگاه‌ها
                                </h2>
                                <p className="text-body-sm text-content-secondary">
                                    {commentCount.toLocaleString("fa-IR")} دیدگاه · میانگین امتیاز {averageStars.toLocaleString("fa-IR")}
                                </p>
                            </div>
                            <article className="space-y-2 rounded-2xl border border-border-primary p-4">
                                <header className="flex flex-wrap items-baseline gap-3">
                                    <h3 className="text-headline-xs">{comments.author}</h3>
                                    <p className="text-body-sm text-content-secondary">امتیاز {comments.stars.toLocaleString("fa-IR")}</p>
                                </header>
                                <p className="text-body-sm">{comments.commentText}</p>
                            </article>
                        </section>
                    )}
                </div>
            </div>

            <aside
                aria-label="خرید محصول"
                className="fixed inset-x-0 bottom-0 z-20 border-t border-border-primary bg-surface-primary pt-4 shadow-lg lg:hidden"
                style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
            >
                <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 sm:px-8">
                    <div className="shrink-0 text-label-sm">
                        {price !== undefined && (
                            <div className="flex items-center justify-between gap-4">
                                {productQuantity > 0 ? (
                                    <QuantityControl
                                        title={title}
                                        quantity={productQuantity}
                                        max={stock}
                                        onIncrease={handleAddToCart}
                                        onDecrease={handleDecreaseFromCart}
                                    />
                                ) : (
                                    <span className="inline-flex items-center gap-2 text-label-md">
                                        <TagPriceIcon className="size-5" aria-hidden="true" />
                                        قیمت:
                                    </span>
                                )}
                                <div className="min-w-0 space-y-1 text-right">
                                    {(oldPrice !== undefined || (discountPercent !== undefined && discountPercent > 0)) && (
                                        <div className="flex flex-wrap items-center justify-end gap-2">
                                            {discountPercent !== undefined && discountPercent > 0 && (
                                                <span className="rounded-full bg-surface-secondary px-2 py-1 text-label-xs text-content-secondary">
                                                    {discountPercent.toLocaleString("fa-IR")}٪ تخفیف
                                                </span>
                                            )}
                                            {oldPrice !== undefined && (
                                                <span className="text-body-sm text-content-secondary">
                                                    <span className="sr-only">قیمت قبلی: </span>
                                                    <del>{oldPrice.toLocaleString("fa-IR")} تومان</del>
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <p className="text-left text-headline-xs">
                                        <span className="sr-only">قیمت فعلی: </span>
                                        {price.toLocaleString("fa-IR")} تومان
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <Button
                        size="sm"
                        variant={!inStock && productQuantity === 0 ? "secondary" : "primary"}
                        appearance={!inStock && productQuantity === 0 ? "outline" : "filled"}
                        fullWidth
                        disabled={productQuantity === 0 && !inStock}
                        onClick={productQuantity > 0 ? () => router.push("/cart") : handleAddToCart}
                        startIcon={productQuantity > 0 ? <CartIcon /> : inStock ? <Bag2Icon /> : undefined}
                    >
                        {productQuantity > 0 ? `سبد خرید (${cartCount.toLocaleString("fa-IR")})` : inStock ? "افزودن به سبد خرید" : "ناموجود"}
                    </Button>
                </div>
            </aside>
        </main>
    );
};

export default ProductDetailPage;
