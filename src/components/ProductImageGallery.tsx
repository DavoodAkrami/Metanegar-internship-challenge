"use client";

import clsx from "clsx";
import Image from "next/image";
import { CloseIcon } from "@solar-icons/react/linear";
import { useRef, useState } from "react";
import type React from "react";

export type ProductImageGalleryProps = {
    images: { src: string; alt: string }[];
    className?: string;
};

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, className }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const touchStartXRef = useRef<number | null>(null);
    const currentIndex = Math.min(activeIndex, Math.max(images.length - 1, 0));

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (images.length < 2 || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
        event.preventDefault();
        setActiveIndex(Math.max(0, Math.min(images.length - 1, currentIndex + (event.key === "ArrowLeft" ? 1 : -1))));
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
        touchStartXRef.current = event.touches[0]?.clientX ?? null;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
        const touchStartX = touchStartXRef.current;
        touchStartXRef.current = null;
        if (touchStartX === null || images.length < 2) return;

        const touchEndX = event.changedTouches[0]?.clientX;
        if (touchEndX === undefined || Math.abs(touchEndX - touchStartX) < 40) return;

        event.preventDefault();
        setActiveIndex(Math.max(0, Math.min(images.length - 1, currentIndex + (touchEndX < touchStartX ? -1 : 1))));
    };

    const renderDots = () => images.length > 1 && (
        <nav aria-label="انتخاب تصویر محصول" className="flex items-center justify-center">
            {images.map((image, index) => (
                <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`نمایش تصویر ${index + 1} از ${images.length}`}
                    aria-current={index === currentIndex ? "true" : undefined}
                    className="flex size-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black"
                >
                    <span className={clsx(
                        "h-2 rounded-full transition-all duration-300 motion-reduce:transition-none",
                        index === currentIndex ? "w-5 bg-brand-black" : "w-2 bg-brand-black/10",
                    )} />
                </button>
            ))}
        </nav>
    );

    if (images.length === 0) return null;

    return (
        <section aria-label="تصاویر محصول" onKeyDown={handleKeyDown} className={clsx("w-full", className)}>
            <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                aria-label={`باز کردن گالری: ${images[currentIndex].alt}، تصویر ${currentIndex + 1} از ${images.length}`}
                className="relative block aspect-square w-full touch-pan-y cursor-zoom-in overflow-hidden rounded-2xl bg-brand-black/5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-black"
            >
                {images.map((image, index) => (
                    <span
                        key={`${image.src}-${index}`}
                        aria-hidden={index !== currentIndex}
                        className={clsx(
                            "absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none",
                            index === currentIndex ? "opacity-100" : "opacity-0",
                        )}
                    >
                        <Image src={image.src} alt={index === currentIndex ? image.alt : ""} fill unoptimized sizes="(max-width: 640px) 100vw, 576px" className="object-contain" />
                    </span>
                ))}
            </button>
            {images.length > 1 && (
                <div className="mt-2">
                    {renderDots()}
                    <span aria-live="polite" className="sr-only">تصویر {currentIndex + 1} از {images.length}</span>
                </div>
            )}

            <dialog
                ref={dialogRef}
                aria-label="گالری تصاویر محصول"
                className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-brand-white px-0 py-4 text-brand-black md:py-6"
            >
                <div className="mx-auto flex h-full min-h-0 w-full max-w-xl flex-col justify-between">
                    <header className="flex shrink-0 items-center justify-between gap-4 px-4 md:px-6">
                        <p className="text-sm font-medium">تصاویر محصول</p>
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            aria-label="بستن گالری"
                            className="flex size-11 items-center justify-center rounded-full bg-brand-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black"
                        >
                            <CloseIcon className="size-6" aria-hidden="true" />
                        </button>
                    </header>

                    <div
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        className="relative mx-auto aspect-square w-full max-w-full shrink-0 touch-pan-y overflow-hidden rounded-2xl bg-brand-white"
                    >
                        {images.map((image, index) => (
                            <button
                                key={`${image.src}-${index}`}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`تصویر ${index + 1} از ${images.length}: ${image.alt}`}
                                aria-current={index === currentIndex ? "true" : undefined}
                                aria-hidden={Math.abs(index - currentIndex) > 1}
                                tabIndex={Math.abs(index - currentIndex) > 1 ? -1 : 0}
                                style={{ transform: `translateX(${(currentIndex - index) * 104}%)` }}
                                className="absolute left-[8%] top-[8%] aspect-square w-[84%] overflow-hidden rounded-2xl bg-brand-white shadow-lg transition-transform duration-300 ease-in-out motion-reduce:transition-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-black"
                            >
                                <Image src={image.src} alt={index === currentIndex ? image.alt : ""} fill unoptimized sizes="80vw" className="object-contain" />
                            </button>
                        ))}
                    </div>

                    <div className="flex w-full min-w-0 shrink-0 flex-col gap-3 px-4 text-right md:px-6">
                        <p aria-live="polite" className="shrink-0 text-sm text-brand-black/60">
                            {images.length} تصویر
                        </p>
                        {images.length > 1 && (
                            <nav aria-label="پیش‌نمایش تصاویر محصول" className="flex max-w-full shrink-0 gap-2 overflow-x-auto py-2">
                                {images.map((image, index) => (
                                    <button
                                        key={`${image.src}-${index}`}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`نمایش تصویر ${index + 1} از ${images.length}`}
                                        aria-current={index === currentIndex ? "true" : undefined}
                                        className={clsx(
                                            "relative size-16 shrink-0 overflow-hidden rounded-lg border-2 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black sm:size-20",
                                            index === currentIndex ? "border-brand-primary" : "border-brand-black/10",
                                        )}
                                    >
                                        <Image src={image.src} alt="" fill unoptimized sizes="80px" className="object-contain" />
                                    </button>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default ProductImageGallery;
