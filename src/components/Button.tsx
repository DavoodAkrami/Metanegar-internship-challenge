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
            ? "bg-brand-primary"
            : variant === "secondary"
                ? "bg-brand-black"
                : "bg-brand-red-1";

    const variantStateClass = variant === "primary"
        ? "enabled:hover:bg-brand-orange-6 enabled:active:bg-brand-orange-7"
        : variant === "secondary"
            ? "enabled:hover:bg-brand-black/80 enabled:active:bg-brand-black"
            : "enabled:hover:bg-brand-red-2 enabled:active:bg-brand-red-1";

    const outlineClass = variant === "primary"
        ? "border-brand-orange-1 enabled:hover:bg-brand-orange-10 enabled:active:bg-brand-primary"
        : variant === "secondary"
            ? "border-brand-black enabled:hover:border-brand-black/80 enabled:active:bg-brand-black"
            : "border-brand-red-1 enabled:hover:bg-brand-red-10 enabled:active:bg-brand-red-1";

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
                "relative inline-flex max-w-full items-center justify-center rounded-full text-center transition-colors motion-reduce:transition-none",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black disabled:cursor-not-allowed disabled:opacity-50",
                sizeClass,
                appearance === "filled"
                    ? ["border-0 text-brand-white", variantClass, variantStateClass]
                    : ["border bg-transparent text-brand-black enabled:active:text-brand-white", outlineClass],
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
