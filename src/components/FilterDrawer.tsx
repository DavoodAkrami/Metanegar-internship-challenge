"use client";
import { AltArrowLeftIcon, BoxIcon, CloseIcon, FilterIcon, TagPriceIcon, WidgetIcon } from "@solar-icons/react/linear";
import { useEffect, useId, useRef, useState } from "react";
import type React from "react";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import RangeSlider from "@/components/RangeSlider";
import Switch from "@/components/Switch";

export type FilterDrawerProps = {
    priceRange: [number, number];
    minPrice: number;
    maxPrice: number;
    onPriceRangeChange: (range: [number, number]) => void;
    categories: string[];
    filteredCategories: string[];
    onFilteredCategoriesChange: (categories: string[]) => void;
    inStockOnly: boolean;
    onInStockOnlyChange: (value: boolean) => void;
    resultCount: number;
    isOpen: boolean;
    onClose: () => void;
    onReset?: () => void;
};

const FilterDrawer: React.FC<FilterDrawerProps> = ({
    priceRange,
    minPrice,
    maxPrice,
    onPriceRangeChange,
    categories,
    filteredCategories,
    onFilteredCategoriesChange,
    inStockOnly,
    onInStockOnlyChange,
    resultCount,
    isOpen,
    onClose,
    onReset,
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const titleId = useId();
    const [openSection, setOpenSection] = useState<"categories" | "price" | null>(null);
    const hasActiveFilters = filteredCategories.length > 0
        || priceRange[0] !== minPrice
        || priceRange[1] !== maxPrice
        || inStockOnly;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) dialog.showModal();
        if (!isOpen && dialog.open) dialog.close();
    }, [isOpen]);

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 64rem)");
        const closeOnDesktop = () => {
            if (desktop.matches && dialogRef.current?.open) onClose();
        };

        desktop.addEventListener("change", closeOnDesktop);
        return () => desktop.removeEventListener("change", closeOnDesktop);
    }, [onClose]);

    const handleCategoryChange = (category: string, checked: boolean) => {
        onFilteredCategoriesChange(checked
            ? [...filteredCategories, category]
            : filteredCategories.filter((selected) => selected !== category));
    };

    const handleReset = () => {
        if (onReset) {
            onReset();
            return;
        }

        onFilteredCategoriesChange([]);
        onPriceRangeChange([minPrice, maxPrice]);
        onInStockOnlyChange(false);
    };

    const renderFilters = (location: "desktop" | "mobile") => (
        <div className="flex min-h-0 flex-1 flex-col gap-2">
            <section className="flex min-h-0 flex-col border-b border-border-primary">
                <h3>
                    <button
                        type="button"
                        aria-expanded={openSection === "categories"}
                        aria-controls={`${titleId}-${location}-categories`}
                        onClick={() => setOpenSection((current) => current === "categories" ? null : "categories")}
                        className="flex min-h-11 w-full items-center justify-between gap-3 text-right text-headline-xs focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
                    >
                        <span className="inline-flex items-center gap-2">
                            دسته‌بندی‌ها
                            <WidgetIcon aria-hidden="true" className="size-5" />
                        </span>
                        <AltArrowLeftIcon
                            aria-hidden="true"
                            className={`size-5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${openSection === "categories" ? "-rotate-90" : ""}`}
                        />
                    </button>
                </h3>
                <div
                    id={`${titleId}-${location}-categories`}
                    className={`max-h-64 overflow-y-auto overscroll-contain ${openSection === "categories" ? "" : "hidden"}`}
                >
                    <fieldset className="flex flex-col">
                        <legend className="sr-only">دسته‌بندی‌ها</legend>
                        {categories.map((category) => (
                            <CheckBox
                                key={category}
                                variant="secondary"
                                label={category}
                                checked={filteredCategories.includes(category)}
                                onChange={(event) => handleCategoryChange(category, event.currentTarget.checked)}
                            />
                        ))}
                    </fieldset>
                </div>
            </section>

            <section className="flex min-h-0 flex-col border-b border-border-primary">
                <h3>
                    <button
                        type="button"
                        aria-expanded={openSection === "price"}
                        aria-controls={`${titleId}-${location}-price`}
                        onClick={() => setOpenSection((current) => current === "price" ? null : "price")}
                        className="flex min-h-11 w-full items-center justify-between gap-3 text-right text-headline-xs focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
                    >
                        <span className="inline-flex items-center gap-2">
                            بازه قیمت
                            <TagPriceIcon aria-hidden="true" className="size-5" />
                        </span>
                        <AltArrowLeftIcon
                            aria-hidden="true"
                            className={`size-5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${openSection === "price" ? "-rotate-90" : ""}`}
                        />
                    </button>
                </h3>
                <div
                    id={`${titleId}-${location}-price`}
                    className={`min-h-0 max-h-44 overflow-y-auto overscroll-contain pb-4 pt-2 ${openSection === "price" ? "" : "hidden"}`}
                >
                    <fieldset className="space-y-3">
                        <legend className="sr-only">بازه قیمت</legend>
                        <div className="flex justify-between gap-2 text-body-sm text-content-secondary">
                            <span>از {priceRange[0].toLocaleString("fa-IR")} تومان</span>
                            <span>تا {priceRange[1].toLocaleString("fa-IR")} تومان</span>
                        </div>
                        <RangeSlider
                            range
                            variant="secondary"
                            min={minPrice}
                            max={maxPrice}
                            step={25000}
                            value={priceRange}
                            onValueChange={(value) => {
                                if (Array.isArray(value)) onPriceRangeChange([value[0], value[1]]);
                            }}
                            aria-label="بازه قیمت"
                        />
                    </fieldset>
                </div>
            </section>

            <div className="shrink-0 border-b border-border-primary py-2">
                <Switch
                    variant="secondary"
                    label={(
                        <span className="inline-flex items-center gap-2">
                            فقط کالاهای موجود
                            <BoxIcon aria-hidden="true" className="size-5" />
                        </span>
                    )}
                    wrapperClassName="w-full justify-between"
                    checked={inStockOnly}
                    onChange={(event) => onInStockOnlyChange(event.currentTarget.checked)}
                />
            </div>

            <div className="shrink-0 pt-3">
                <Button variant="secondary" appearance="outline" size="sm" fullWidth disabled={!hasActiveFilters} onClick={handleReset}>
                    پاک کردن فیلترها
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <aside
                aria-labelledby={`${titleId}-desktop`}
                className="hidden rounded-2xl border border-border-primary bg-surface-primary p-4 text-content-primary lg:sticky lg:top-36 lg:col-span-3 lg:block lg:max-h-[calc(100dvh-9rem)] lg:self-start lg:overflow-y-auto"
            >
                <h2 id={`${titleId}-desktop`} className="mb-4 flex items-center gap-2 text-headline-sm">
                    <FilterIcon aria-hidden="true" className="size-5" />
                    فیلترها
                </h2>
                {renderFilters("desktop")}
            </aside>

            <dialog
                ref={dialogRef}
                aria-labelledby={`${titleId}-mobile`}
                onClose={onClose}
                onClick={(event) => {
                    if (event.target === event.currentTarget) onClose();
                }}
                className="fixed inset-x-0 bottom-0 top-auto m-0 w-full max-w-none overflow-hidden rounded-t-2xl border-0 bg-surface-primary p-0 text-content-primary backdrop:bg-surface-overlay-dark lg:hidden"
            >
                <div className="flex max-h-dvh flex-col overflow-hidden">
                    <header className="flex shrink-0 items-center justify-between border-b border-border-primary px-4 py-3">
                        <h2 id={`${titleId}-mobile`} className="flex items-center gap-2 text-headline-sm">
                            <FilterIcon aria-hidden="true" className="size-5" />
                            فیلترها
                        </h2>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="بستن فیلترها"
                            className="flex size-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
                        >
                            <CloseIcon className="size-6" aria-hidden="true" />
                        </button>
                    </header>
                    <div className="flex min-h-0 flex-col overflow-hidden p-4">{renderFilters("mobile")}</div>
                    <footer className="shrink-0 border-t border-border-primary p-4">
                        <Button fullWidth onClick={onClose}>نمایش {resultCount.toLocaleString("fa-IR")} محصول</Button>
                    </footer>
                </div>
            </dialog>
        </>
    );
};

export default FilterDrawer;
