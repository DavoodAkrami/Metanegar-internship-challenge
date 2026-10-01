"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { ArrowRightIcon, CartIcon } from "@solar-icons/react/linear";
import Button from "@/components/Button";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getCartSnapshot, getServerCartSnapshot, parseCart, setCartQuantity, subscribeToCart } from "@/lib/cart";

const CartPage = () => {
    const [checkoutMessage, setCheckoutMessage] = useState("");
    const snapshot = useSyncExternalStore(subscribeToCart, getCartSnapshot, getServerCartSnapshot);
    const cartItems = parseCart(snapshot);

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const fullPrice = cartItems.reduce((total, item) => total + (item.oldPrice ?? item.price) * item.quantity, 0);
    const finalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = fullPrice - finalPrice;
    const showCheckoutMessage = () => setCheckoutMessage("ثبت سفارش هنوز در این نسخه فعال نیست.");

    return (
        <>
            <Header
                title="سبد خرید"
                titleAsHeading
                rightButton={(
                    <Link
                        href="/"
                        aria-label="بازگشت به فروشگاه"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full text-content-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
                    >
                        <ArrowRightIcon className="size-6" aria-hidden="true" />
                    </Link>
                )}
            />
            <main className="mx-auto w-full max-w-[1440px] px-6 pt-24 pb-52 text-content-primary sm:px-8 lg:px-12 lg:pb-8 xl:px-16">
                {snapshot === "null" ? (
                    <p className="py-16 text-center text-body-sm text-content-secondary" role="status">در حال بارگذاری سبد خرید...</p>
                ) : cartItems.length === 0 ? (
                    <section className="mx-auto flex max-w-md flex-col items-center gap-4 py-16 text-center" aria-labelledby="empty-cart-heading">
                        <CartIcon className="size-16 text-content-disabled" aria-hidden="true" />
                        <h2 id="empty-cart-heading" className="text-headline-sm">سبد خرید شما خالی است</h2>
                        <p className="text-body-sm text-content-secondary">محصولات مورد علاقه‌تان را به سبد خرید اضافه کنید.</p>
                        <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-2.5 text-label-md text-content-on-brand transition-colors hover:bg-palette-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus motion-reduce:transition-none">
                            شروع خرید
                        </Link>
                    </section>
                ) : (
                    <div className="grid gap-4 lg:grid-cols-12">
                        <section aria-labelledby="cart-items-heading" className="min-w-0 lg:col-span-8">
                            <h2 id="cart-items-heading" className="mb-4 text-headline-sm">کالاهای سبد خرید ({itemCount.toLocaleString("fa-IR")})</h2>
                            <ul className="space-y-4">
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard
                                            kind="cart"
                                            title={item.title}
                                            price={item.price}
                                            oldPrice={item.oldPrice}
                                            discountPercent={item.discountPercent}
                                            image={item.image}
                                            imageAlt={item.imageAlt}
                                            href={`/products/${item.slug}`}
                                            inStock={item.stock > 0}
                                            cartQuantity={item.quantity}
                                            stock={item.stock - cartItems.reduce((total, entry) => entry.slug === item.slug && entry.id !== item.id ? total + entry.quantity : total, 0)}
                                            onAddToCart={() => setCartQuantity(item.id, item.quantity + 1)}
                                            onDecreaseFromCart={() => setCartQuantity(item.id, item.quantity - 1)}
                                        >
                                            {(item.color || item.size) && (
                                                <p className="text-body-xs text-content-secondary">
                                                    {[item.color && `رنگ: ${item.color}`, item.size && `سایز: ${item.size}`].filter(Boolean).join(" · ")}
                                                </p>
                                            )}
                                        </ProductCard>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <aside aria-labelledby="order-summary-heading" className="hidden self-start rounded-2xl bg-surface-primary p-4 shadow-sm shadow-content-primary/20 lg:sticky lg:top-24 lg:col-span-4 lg:block">
                            <h2 id="order-summary-heading" className="mb-4 text-headline-sm">خلاصه سفارش</h2>
                            <dl className="space-y-3 text-body-sm">
                                <div className="flex justify-between gap-3"><dt>قیمت کالاها ({itemCount.toLocaleString("fa-IR")})</dt><dd>{fullPrice.toLocaleString("fa-IR")} تومان</dd></div>
                                {discount > 0 && <div className="flex justify-between gap-3 text-content-secondary"><dt>تخفیف</dt><dd>{discount.toLocaleString("fa-IR")} تومان</dd></div>}
                                <div className="flex justify-between gap-3 border-t border-border-primary pt-3 text-label-sm"><dt>مبلغ نهایی</dt><dd>{finalPrice.toLocaleString("fa-IR")} تومان</dd></div>
                            </dl>
                            <p className="my-4 text-body-xs text-content-secondary">هزینه ارسال هنوز محاسبه نشده است.</p>
                            <Button fullWidth onClick={showCheckoutMessage}>ادامه فرایند خرید</Button>
                            {checkoutMessage && <p role="status" className="mt-3 text-body-sm text-content-secondary">{checkoutMessage}</p>}
                        </aside>
                    </div>
                )}
            </main>
            {cartItems.length > 0 && (
                <aside
                    aria-label="خلاصه و ادامه سفارش"
                    className="fixed inset-x-0 bottom-0 z-20 border-t border-border-primary bg-surface-primary pt-4 shadow-lg lg:hidden"
                    style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
                >
                    <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8">
                        <div className="mb-3 flex items-end justify-between gap-4 text-body-sm">
                            <span className="text-label-sm">مبلغ نهایی</span>
                            <div className="text-left">
                                {discount > 0 && <p className="text-body-xs text-content-secondary">{fullPrice.toLocaleString("fa-IR")} تومان · {discount.toLocaleString("fa-IR")} تومان تخفیف</p>}
                                <p className="text-headline-xs">{finalPrice.toLocaleString("fa-IR")} تومان</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 gap-2">
                            <div className="col-span-7"><Button size="sm" fullWidth onClick={showCheckoutMessage}>تکمیل سفارش</Button></div>
                            <Link href="/" className="col-span-3 inline-flex min-h-11 items-center justify-center rounded-full border border-border-selected px-2 text-center text-label-sm text-content-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus">فروشگاه</Link>
                        </div>
                        {checkoutMessage && <p role="status" className="mt-2 text-center text-body-xs text-content-secondary">{checkoutMessage}</p>}
                    </div>
                </aside>
            )}
        </>
    );
};

export default CartPage;
