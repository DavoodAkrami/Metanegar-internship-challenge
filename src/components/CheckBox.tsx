"use client";
import clsx from "clsx";
import { CheckIcon } from "@solar-icons/react/linear";
import { useId } from "react";
import type React from "react";

export type CheckBoxProps = Omit<React.ComponentPropsWithRef<"input">, "type" | "size" | "children"> & {
    label?: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    wrapperClassName?: string;
} & (
    | { label: Exclude<React.ReactNode, null | undefined | boolean> }
    | { "aria-label": string }
    | { "aria-labelledby": string }
);

const CheckBox: React.FC<CheckBoxProps> = ({
    label,
    variant = "primary",
    size = "sm",
    wrapperClassName,
    className,
    id,
    disabled,
    ...props
}) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hasLabel = label !== undefined && label !== null && label !== false;

    const variantClass = variant === "primary"
        ? "peer-checked:border-brand-orange-1 peer-checked:bg-brand-primary"
        : "peer-checked:border-brand-black peer-checked:bg-brand-black";

    const sizeClass = size === "sm" ? "size-5" : size === "md" ? "size-6" : "size-7";

    return (
        <span className={clsx(
            "inline-flex min-h-11 max-w-full items-center gap-3 align-middle text-brand-black",
            disabled && "opacity-50",
            wrapperClassName,
        )}>
            <span className={clsx(
                "relative flex size-11 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ease-out motion-reduce:transition-none",
                !disabled && "[@media(hover:hover)_and_(pointer:fine)]:hover:bg-brand-black/5",
            )}>
                <input
                    {...props}
                    id={inputId}
                    type="checkbox"
                    disabled={disabled}
                    className={clsx(
                        "peer absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed",
                        className,
                    )}
                />
                <span aria-hidden="true" className={clsx(
                    "pointer-events-none flex items-center justify-center rounded-xs border border-brand-black/60 bg-brand-white text-brand-white",
                    "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-black [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
                    sizeClass,
                    variantClass,
                )}>
                    <CheckIcon className="size-full p-0.5" />
                </span>
            </span>
            {hasLabel && (
                <label htmlFor={inputId} className={clsx(
                    "flex min-h-11 min-w-0 cursor-pointer items-center text-sm font-medium break-words",
                    disabled && "cursor-not-allowed",
                )}>
                    {label}
                </label>
            )}
        </span>
    );
};

export default CheckBox;
