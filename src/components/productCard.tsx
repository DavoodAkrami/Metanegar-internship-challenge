"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { AddIcon } from "@solar-icons/react/linear";
import type React from "react";
import Button from "@/components/Button";

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
    className,
}) => (
    <article className={clsx("relative flex w-full flex-col gap-3 rounded-2xl border border-brand-black/10 bg-brand-white p-3 text-brand-black sm:gap-4 sm:p-4", href && "cursor-pointer", className)}>
        <div className="relative">
            <Image
                src={image}
                alt={imageAlt}
                width={640}
                height={640}
                unoptimized
                className="aspect-square h-auto w-full rounded-lg object-contain"
            />
            <div className="absolute right-2 bottom-2 z-10">
                <Button
                    variant="primary"
                    appearance="filled"
                    size="sm"
                    iconOnly
                    disabled={inStock === false}
                    onClick={onAddToCart}
                    aria-label={`افزودن ${title} به سبد خرید`}
                >
                    <AddIcon />
                </Button>
            </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 sm:gap-3">
            <h3 className="text-sm font-semibold break-words sm:text-base">
                {href ? (
                    <Link
                        href={href}
                        className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-black"
                    >
                        {title}
                    </Link>
                ) : title}
            </h3>
            {inStock !== undefined && (
                <p className="text-sm text-brand-black/60">
                    {inStock ? "موجود" : "ناموجود"}
                </p>
            )}
            <div className="mt-auto space-y-2">
                {(oldPrice !== undefined || (discountPercent !== undefined && discountPercent > 0)) && (
                    <p className="flex flex-wrap items-center gap-2 text-sm text-brand-black/60">
                        {oldPrice !== undefined && (
                            <span>
                                <span className="sr-only">قیمت قبلی: </span>
                                <del>{oldPrice.toLocaleString("fa-IR")} تومان</del>
                            </span>
                        )}
                        {discountPercent !== undefined && discountPercent > 0 && (
                            <span className="rounded-full bg-brand-black/5 px-3 py-2 text-brand-black">
                                {discountPercent.toLocaleString("fa-IR")}٪ تخفیف
                            </span>
                        )}
                    </p>
                )}
                <p className="text-base font-semibold break-words sm:text-lg">
                    <span className="sr-only">قیمت: </span>
                    {price.toLocaleString("fa-IR")} <span className="text-sm font-normal">تومان</span>
                </p>
            </div>
        </div>
    </article>
);

export default ProductCard;
