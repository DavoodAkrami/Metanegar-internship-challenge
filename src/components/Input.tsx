"use client";
import clsx from "clsx";
import { useId } from "react";
import type React from "react";

export type InputProps = React.ComponentPropsWithRef<"input"> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    rounded?: "full" | "lg";
    appearance?: "default" | "gray";
    wrapperClassName?: string;
};

const Input: React.FC<InputProps> = ({
    label,
    error,
    startIcon,
    endIcon,
    rounded = "full",
    appearance = "default",
    wrapperClassName,
    className,
    id,
    disabled,
    placeholder,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    ...props
}) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const hasLabel = label !== undefined && label !== null && label !== false;
    const hasError = error !== undefined && error !== null && error !== false;
    const accessibleLabel = ariaLabel ?? (!hasLabel && !ariaLabelledBy ? placeholder : undefined);
    const describedBy = [ariaDescribedBy, hasError ? errorId : undefined]
        .filter(Boolean)
        .join(" ") || undefined;
    
    const roundedClass = rounded === "full" ? "rounded-full" : "rounded-lg";
    const appearanceClass = appearance === "default"
        ? [
            "border bg-brand-white",
            hasError
                ? "border-brand-red-1 focus-within:border-brand-red-1"
                : "border-brand-black/20 hover:border-brand-black/40 focus-within:border-brand-primary",
        ]
        : [
            "border-0 bg-brand-black/5 focus-within:border",
            hasError
                ? "focus-within:border-brand-red-1"
                : "focus-within:border-brand-primary",
        ];

    return (
        <div className={clsx("flex w-full flex-col gap-2", wrapperClassName)}>
            {hasLabel && (
                <label htmlFor={inputId} className="text-sm font-medium text-brand-black">
                    {label}
                </label>
            )}
            <div
                className={clsx(
                    "flex min-h-12 w-full items-center gap-2 px-4 transition-colors motion-reduce:transition-none",
                    roundedClass,
                    appearanceClass,
                    disabled && "cursor-not-allowed bg-brand-black/5 opacity-50",
                )}
            >
                {startIcon && (
                    <span className="flex size-6 shrink-0 items-center justify-center text-brand-black/60 [&>svg]:size-full" aria-hidden="true">
                        {startIcon}
                    </span>
                )}
                <input
                    {...props}
                    id={inputId}
                    disabled={disabled}
                    placeholder={placeholder}
                    aria-label={accessibleLabel}
                    aria-labelledby={ariaLabelledBy}
                    aria-describedby={describedBy}
                    aria-invalid={hasError ? true : ariaInvalid}
                    className={clsx(
                        "min-w-0 flex-1 bg-transparent py-2.5 text-brand-black outline-none placeholder:text-brand-black/50 disabled:cursor-not-allowed",
                        className,
                    )}
                />
                {endIcon && (
                    <span className="flex size-6 shrink-0 items-center justify-center text-brand-black/60 [&>svg]:size-full" aria-hidden="true">
                        {endIcon}
                    </span>
                )}
            </div>
            {hasError && (
                <p id={errorId} role="alert" className="text-sm text-brand-black">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
