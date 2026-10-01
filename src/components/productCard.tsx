"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { AddIcon } from "@solar-icons/react/linear";
import type React from "react";
import Button from "@/components/Button";
import QuantityControl from "@/components/QuantityControl";

export type ProductCardProps = {
    title: string;
    price: number;
    image: string;
    imageAlt: string;
    href?: string;
    inStock?: boolean;
    oldPrice?: number;
    discountPercent?: number;
    onAddToCart?: () => void;
    onDecreaseFromCart?: () => void;
    cartQuantity?: number;
    stock?: number;
    kind?: "default" | "cart";
    children?: React.ReactNode;
    className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    price,
    image,
    imageAlt,
    href,
    inStock,
    oldPrice,
    discountPercent,
    onAddToCart,
    onDecreaseFromCart,
    cartQuantity = 0,
    stock,
    kind = "default",
    children,
    className,
}) => (
    <article className={clsx("relative flex w-full gap-3 rounded-2xl bg-surface-primary p-3 text-content-primary shadow-[0_0_8px] shadow-content-primary/20 sm:gap-4 sm:p-4", kind === "cart" ? "flex-row" : "flex-col", href && "cursor-pointer", className)}>
        <div className={clsx("relative shrink-0", kind === "cart" && "w-24 self-center sm:w-32")}>
            <Image
                src={image}
                alt={imageAlt}
                width={640}
                height={640}
                unoptimized
                className="aspect-square h-auto w-full rounded-lg object-contain"
            />
            {kind !== "cart" && <div className={clsx(
                "absolute right-2 bottom-2 z-10 flex justify-start overflow-hidden rounded-full shadow-[0_0_8px] shadow-content-primary/20 transition-[width] duration-300 ease-out focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-border-focus motion-reduce:transition-none",
                cartQuantity > 0 && onAddToCart && onDecreaseFromCart ? "w-24" : onAddToCart && onDecreaseFromCart ? "w-9" : "w-8",
            )}>
                {onAddToCart && onDecreaseFromCart ? (
                    <QuantityControl
                        title={title}
                        quantity={cartQuantity}
                        max={stock ?? Infinity}
                        onIncrease={onAddToCart}
                        onDecrease={onDecreaseFromCart}
                    />
                ) : (
                    <Button
                        variant="primary"
                        appearance="filled"
                        size="xs"
                        iconOnly
                        className="shadow-sm shadow-content-primary/20"
                        disabled={inStock === false}
                        onClick={onAddToCart}
                        aria-label={`افزودن ${title} به سبد خرید`}
                    >
                        <AddIcon />
                    </Button>
                )}
            </div>}
            {kind === "cart" && onAddToCart && onDecreaseFromCart && (
                <QuantityControl
                    title={title}
                    quantity={cartQuantity}
                    max={stock ?? Infinity}
                    onIncrease={onAddToCart}
                    onDecrease={onDecreaseFromCart}
                    className="absolute right-0 bottom-1 z-10"
                />
            )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
            <h3 className="text-headline-xs break-words sm:text-headline-sm">
                {href ? (
                    <Link
                        href={href}
                        className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-border-focus"
                    >
                        {title}
                    </Link>
                ) : title}
            </h3>
            {inStock !== undefined && (
                <p className={clsx("text-body-sm", inStock ? "text-content-positive" : "text-content-negative")}>
                    {inStock ? "موجود" : "ناموجود"}
                </p>
            )}
            <div className="mt-auto space-y-2">
                {(oldPrice !== undefined || (discountPercent !== undefined && discountPercent > 0)) && (
                    <p className="flex flex-wrap items-center gap-2 text-content-secondary">
                        {oldPrice !== undefined && (
                            <span className="text-body-xs">
                                <span className="sr-only">قیمت قبلی: </span>
                                <del>{oldPrice.toLocaleString("fa-IR")} تومان</del>
                            </span>
                        )}
                        {discountPercent !== undefined && discountPercent > 0 && (
                            <span className="rounded-full bg-surface-positive-light px-3 py-2 text-label-xs text-content-positive">
                                {discountPercent.toLocaleString("fa-IR")}٪ تخفیف
                            </span>
                        )}
                    </p>
                )}
                <p className="text-headline-xs break-words sm:text-headline-sm">
                    <span className="sr-only">قیمت: </span>
                    {price.toLocaleString("fa-IR")} <span className="text-body-xs">تومان</span>
                </p>
            </div>
            {children && <div className="relative z-10 mt-2">{children}</div>}
        </div>
    </article>
);

export default ProductCard;
