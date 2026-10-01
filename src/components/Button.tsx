"use client";
import clsx from "clsx";
import type React from "react";

export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
    variant?: "primary" | "secondary" | "danger";
    size?: "xs" | "sm" | "md" | "lg";
    appearance?: "filled" | "outline";
    fullWidth?: boolean;
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    iconOnly?: boolean;
};



const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    appearance = "filled",
    size = "md",
    fullWidth = false,
    loading = false,
    iconOnly = false,
    startIcon,
    endIcon,
    children,
    className,
    disabled,
    type = "button",
    ...props
}) => {
    const iconSizeClass = size === "xs" ? "size-4" : size === "sm" ? "size-5" : "size-6";
    const iconClassName = clsx(
        "inline-flex shrink-0 items-center justify-center [&>svg]:size-full",
        iconSizeClass,
    );

    const variantClass = 
        variant === "primary" 
            ? "bg-brand"
            : variant === "secondary"
                ? "bg-surface-inverse-primary"
                : "bg-surface-negative";

    const variantStateClass = variant === "primary"
        ? "enabled:hover:bg-palette-orange-300 enabled:active:bg-palette-orange-200"
        : variant === "secondary"
            ? "enabled:hover:bg-surface-inverse-secondary enabled:active:bg-surface-inverse-primary"
            : "enabled:hover:bg-palette-red-500 enabled:active:bg-surface-negative";

    const outlineClass = variant === "primary"
        ? "border-brand enabled:hover:bg-surface-secondary enabled:active:bg-brand"
        : variant === "secondary"
            ? "border-border-selected enabled:hover:border-border-inverse-primary enabled:active:bg-surface-inverse-primary"
            : "border-border-negative text-content-negative enabled:hover:bg-surface-negative-light enabled:active:bg-surface-negative";

    const filledTextClass = variant === "primary"
        ? "text-content-on-brand"
        : variant === "secondary"
            ? "text-content-on-inverse"
            : "text-content-on-negative";

    const outlineActiveTextClass = variant === "primary"
        ? "enabled:active:text-content-on-brand"
        : variant === "secondary"
            ? "enabled:active:text-content-on-inverse"
            : "enabled:active:text-content-on-negative";

    const sizeClass = size === "xs"
        ? "min-h-8 gap-1"
        : size === "sm"
            ? "min-h-11 gap-2"
            : size === "md"
                ? "min-h-12 gap-2"
                : "min-h-14 gap-3";

    const paddingClass = size === "xs"
        ? "px-2 py-1"
        : size === "sm"
            ? "px-3 py-2"
            : size === "md"
                ? "px-4 py-2.5"
                : "px-6 py-3";

    const iconOnlyClass = size === "xs"
        ? "size-8"
        : size === "sm"
            ? "size-11"
            : size === "md"
                ? "size-12"
                : "size-14";

    return (
        <button
            {...props}
            type={type}
            disabled={disabled || loading}
            aria-busy={loading || undefined}
            className={clsx(
                "relative inline-flex max-w-full items-center justify-center rounded-full text-center text-label-md transition-colors motion-reduce:transition-none",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-border-primary",
                sizeClass,
                appearance === "filled"
                    ? ["border-0", filledTextClass, variantClass, variantStateClass]
                    : ["border bg-transparent", variant !== "danger" && "text-content-primary", outlineActiveTextClass, outlineClass],
                fullWidth ? "w-full" : iconOnly && iconOnlyClass,
                iconOnly ? "p-0" : paddingClass,
                className,
            )}
        >
            {loading && (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <span className={clsx(iconSizeClass, "animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none")} />
                </span>
            )}
            <span
                className={clsx(
                    "inline-flex min-w-0 items-center justify-center gap-[inherit]",
                    loading && "opacity-0",
                    iconOnly && iconClassName,
                )}
                aria-hidden={iconOnly || undefined}
            >
                {startIcon && <span className={iconClassName} aria-hidden="true">{startIcon}</span>}
                {iconOnly ? children : <span className="min-w-0">{children}</span>}
                {endIcon && <span className={iconClassName} aria-hidden="true">{endIcon}</span>}
            </span>
        </button>
    );
};

export { Button };
export default Button;
