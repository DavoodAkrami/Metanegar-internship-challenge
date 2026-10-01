"use client";
import clsx from "clsx";
import { CheckIcon } from "@solar-icons/react/linear";
import { useId } from "react";
import type React from "react";

export type SwitchProps = Omit<React.ComponentPropsWithRef<"input">, "type" | "role" | "size" | "children"> & {
    label?: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    wrapperClassName?: string;
} & (
    | { label: Exclude<React.ReactNode, null | undefined | boolean> }
    | { "aria-label": string }
);

const Switch: React.FC<SwitchProps> = ({
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
        ? "peer-checked:bg-brand"
        : "peer-checked:bg-surface-inverse-primary";

    const sizeClass = size === "sm" ? "h-7 w-12" : size === "md" ? "h-8 w-14" : "h-9 w-16";
    const thumbClass = size === "sm"
        ? "[&>span]:size-5 peer-checked:[&>span]:translate-x-5 rtl:peer-checked:[&>span]:-translate-x-5"
        : size === "md"
            ? "[&>span]:size-6 peer-checked:[&>span]:translate-x-6 rtl:peer-checked:[&>span]:-translate-x-6"
            : "[&>span]:size-7 peer-checked:[&>span]:translate-x-7 rtl:peer-checked:[&>span]:-translate-x-7";

    return (
        <span className={clsx(
            "inline-flex min-h-11 max-w-full items-center gap-3 align-middle text-content-primary ltr:flex-row-reverse",
            disabled && "opacity-50",
            wrapperClassName,
        )}>
            {hasLabel && (
                <label htmlFor={inputId} className={clsx(
                    "flex min-h-11 min-w-0 cursor-pointer items-center text-label-sm break-words",
                    disabled && "cursor-not-allowed",
                )}>
                    {label}
                </label>
            )}
            <span className="relative inline-flex min-h-11 shrink-0 items-center justify-center">
                <input
                    {...props}
                    id={inputId}
                    type="checkbox"
                    role="switch"
                    disabled={disabled}
                    className={clsx(
                        "peer absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed",
                        className,
                    )}
                />
                <span aria-hidden="true" className={clsx(
                    "pointer-events-none relative rounded-full bg-surface-tertiary transition duration-200 peer-enabled:peer-active:scale-95 motion-reduce:transition-none",
                    "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-focus [&_svg]:opacity-0 peer-checked:[&_svg]:opacity-100",
                    variantClass,
                    sizeClass,
                    thumbClass,
                )}>
                    <span className="absolute start-1 top-1 flex items-center justify-center rounded-full bg-surface-primary text-content-primary transition-transform duration-200 ease-out motion-reduce:transition-none">
                        <CheckIcon strokeWidth={2} className="size-full p-0.5" />
                    </span>
                </span>
            </span>
        </span>
    );
};

export default Switch;
