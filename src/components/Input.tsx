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
            "border bg-surface-primary",
            hasError
                ? "border-border-negative focus-within:border-border-negative"
                : "border-border-primary hover:border-border-primary focus-within:border-border-focus",
        ]
        : [
            "border-0 bg-surface-secondary focus-within:border",
            hasError
                ? "focus-within:border-border-negative"
                : "focus-within:border-border-focus",
        ];

    return (
        <div className={clsx("flex w-full flex-col gap-2", wrapperClassName)}>
            {hasLabel && (
                <label htmlFor={inputId} className="text-label-sm text-content-primary">
                    {label}
                </label>
            )}
            <div
                className={clsx(
                    "flex min-h-12 w-full items-center gap-2 px-4 transition-colors motion-reduce:transition-none",
                    roundedClass,
                    appearanceClass,
                    disabled && "cursor-not-allowed bg-surface-disabled",
                )}
            >
                {startIcon && (
                    <span className="flex size-6 shrink-0 items-center justify-center text-content-secondary [&>svg]:size-full" aria-hidden="true">
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
                        "min-w-0 flex-1 bg-transparent py-2.5 text-body-md text-content-primary outline-none placeholder:text-content-tertiary disabled:cursor-not-allowed disabled:text-content-disabled disabled:placeholder:text-content-disabled",
                        className,
                    )}
                />
                {endIcon && (
                    <span className="flex size-6 shrink-0 items-center justify-center text-content-secondary [&>svg]:size-full" aria-hidden="true">
                        {endIcon}
                    </span>
                )}
            </div>
            {hasError && (
                <p id={errorId} role="alert" className="text-body-sm text-content-negative">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
