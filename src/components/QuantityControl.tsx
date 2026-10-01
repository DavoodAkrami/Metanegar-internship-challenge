"use client";

import clsx from "clsx";
import { AddIcon, MinusIcon, TrashBinTrashIcon } from "@solar-icons/react/linear";
import type React from "react";
import Button from "@/components/Button";

export type QuantityControlProps = {
    title: string;
    quantity: number;
    max: number;
    onIncrease: () => void;
    onDecrease: () => void;
    className?: string;
};

const QuantityControl: React.FC<QuantityControlProps> = ({ title, quantity, max, onIncrease, onDecrease, className }) => (
    <div role="group" aria-label={quantity > 0 ? `تعداد ${title} در سبد خرید` : `افزودن ${title} به سبد خرید`} className={clsx("inline-flex shrink-0 items-center gap-0.5 rounded-full bg-surface-primary p-0.5 shadow-[0_0_8px] shadow-content-primary/20", className)}>
        <Button
            variant="primary"
            appearance="filled"
            size="xs"
            iconOnly
            disabled={quantity >= max}
            onClick={onIncrease}
            aria-label={quantity > 0 ? `افزایش تعداد ${title}` : `افزودن ${title} به سبد خرید`}
        >
            <AddIcon />
        </Button>
        {quantity > 0 && (
            <>
                <output className="min-w-5 text-center text-label-xs text-content-primary" aria-label={`تعداد ${title}`} aria-live="polite">
                    {quantity.toLocaleString("fa-IR")}
                </output>
                <Button
                    variant="secondary"
                    appearance="outline"
                    size="xs"
                    iconOnly
                    onClick={onDecrease}
                    aria-label={quantity === 1 ? `حذف ${title} از سبد خرید` : `کاهش تعداد ${title}`}
                >
                    {quantity === 1 ? <TrashBinTrashIcon /> : <MinusIcon />}
                </Button>
            </>
        )}
    </div>
);

export default QuantityControl;
