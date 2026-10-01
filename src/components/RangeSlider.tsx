"use client";
import clsx from "clsx";
import { useId, useState } from "react";
import type React from "react";

export type RangeSliderProps = Omit<React.ComponentPropsWithRef<"input">, "type" | "children" | "value" | "defaultValue"> & {
    label?: React.ReactNode;
    variant?: "primary" | "secondary";
    range?: boolean;
    value?: number | [number, number];
    defaultValue?: number | [number, number];
    onValueChange?: (value: number | [number, number]) => void;
    wrapperClassName?: string;
} & (
    | { label: Exclude<React.ReactNode, null | undefined | boolean> }
    | { "aria-label": string }
    | { "aria-labelledby": string }
);

const RangeSlider: React.FC<RangeSliderProps> = ({
    label,
    variant = "primary",
    range = false,
    value,
    defaultValue,
    onValueChange,
    wrapperClassName,
    className,
    id,
    min = 0,
    max = 100,
    step = 1,
    disabled,
    name,
    ref,
    onChange,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...props
}) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const minNumber = Number(min);
    const maxNumber = Number(max);
    const [internalValue, setInternalValue] = useState<number | [number, number]>(() =>
        defaultValue ?? (range ? [minNumber, maxNumber] : (minNumber + maxNumber) / 2),
    );
    const selectedValue = value ?? internalValue;
    const lowerValue = Array.isArray(selectedValue) ? selectedValue[0] : minNumber;
    const upperValue = Array.isArray(selectedValue) ? selectedValue[1] : selectedValue;
    const percentage = (currentValue: number) => maxNumber > minNumber
        ? Math.min(100, Math.max(0, (currentValue - minNumber) / (maxNumber - minNumber) * 100))
        : 0;
    const startPercent = range ? percentage(lowerValue) : 0;
    const endPercent = percentage(upperValue);

    const hasLabel = label !== undefined && label !== null && label !== false;
    const labelId = `${inputId}-label`;
    
    const fillClass = variant === "primary" ? "fill-brand" : "fill-content-primary";
    const thumbClass = variant === "primary"
        ? "[&::-webkit-slider-thumb]:bg-brand [&::-moz-range-thumb]:bg-brand"
        : "[&::-webkit-slider-thumb]:bg-surface-inverse-primary [&::-moz-range-thumb]:bg-surface-inverse-primary";
    const inputClass = clsx(
        "absolute inset-0 h-11 w-full cursor-pointer appearance-none bg-transparent focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed",
        "[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-transparent [&::-moz-range-progress]:bg-transparent",
        "[&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:ring-content-primary/10 [&::-webkit-slider-thumb]:transition-shadow [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:motion-reduce:transition-none",
        "[&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:ring-content-primary/10 [&::-moz-range-thumb]:transition-shadow [&::-moz-range-thumb]:duration-200",
        "enabled:hover:[&::-webkit-slider-thumb]:ring-8 enabled:active:[&::-webkit-slider-thumb]:ring-8 enabled:hover:[&::-moz-range-thumb]:ring-8 enabled:active:[&::-moz-range-thumb]:ring-8",
        range && "pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto",
        thumbClass,
        className,
    );

    const handleChange = (thumb: "lower" | "upper") => (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextNumber = Number(event.currentTarget.value);
        const nextValue: number | [number, number] = range
            ? thumb === "lower"
                ? [Math.min(nextNumber, upperValue), upperValue]
                : [lowerValue, Math.max(nextNumber, lowerValue)]
            : nextNumber;

        if (value === undefined) setInternalValue(nextValue);
        onValueChange?.(nextValue);
        onChange?.(event);
    };

    const handleTrackPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!range || disabled || event.target !== event.currentTarget) return;

        const bounds = event.currentTarget.getBoundingClientRect();
        const position = Math.min(1, Math.max(0, (event.clientX - bounds.left - 12) / Math.max(1, bounds.width - 24)));
        const fraction = getComputedStyle(event.currentTarget).direction === "rtl" ? 1 - position : position;
        const rawValue = minNumber + fraction * (maxNumber - minNumber);
        const stepNumber = Number(step);
        const nextNumber = Math.min(maxNumber, Math.max(minNumber,
            Number.isFinite(stepNumber) && stepNumber > 0
                ? minNumber + Math.round((rawValue - minNumber) / stepNumber) * stepNumber
                : rawValue,
        ));
        const moveLower = Math.abs(nextNumber - lowerValue) <= Math.abs(nextNumber - upperValue);
        const nextValue: [number, number] = moveLower
            ? [Math.min(nextNumber, upperValue), upperValue]
            : [lowerValue, Math.max(nextNumber, lowerValue)];

        if (value === undefined) setInternalValue(nextValue);
        onValueChange?.(nextValue);
        event.currentTarget.querySelectorAll("input")[moveLower ? 0 : 1]?.focus();
    };

    return (
        <div className={clsx("flex w-full flex-col gap-2", disabled && "opacity-50", wrapperClassName)}>
            {hasLabel && (
                range
                    ? <span id={labelId} className="text-label-sm text-content-primary">{label}</span>
                    : <label htmlFor={inputId} className="text-label-sm text-content-primary">{label}</label>
            )}
            <div
                className={clsx("relative h-11 w-full", range && !disabled && "cursor-pointer")}
                onPointerDown={range ? handleTrackPointerDown : undefined}
            >
                <div className="pointer-events-none absolute inset-x-3 top-1/2 h-2 -translate-y-1/2 overflow-hidden rounded-full bg-surface-tertiary">
                    <svg aria-hidden="true" viewBox="0 0 100 8" preserveAspectRatio="none" className="h-full w-full rtl:rotate-180">
                        <rect x={startPercent} y="0" width={Math.max(0, endPercent - startPercent)} height="8" className={fillClass} />
                    </svg>
                </div>
                {range ? (
                    <>
                        <input
                            {...props}
                            ref={ref}
                            id={`${inputId}-min`}
                            name={name ? `${name}-min` : undefined}
                            type="range"
                            min={min}
                            max={max}
                            step={step}
                            value={lowerValue}
                            onChange={handleChange("lower")}
                            disabled={disabled}
                            aria-label={ariaLabel ? `${ariaLabel}، کمینه` : "کمینه"}
                            aria-labelledby={hasLabel || ariaLabelledBy ? `${ariaLabelledBy ?? labelId} ${inputId}-min-label` : undefined}
                            className={inputClass}
                        />
                        <span id={`${inputId}-min-label`} className="sr-only">کمینه</span>
                        <input
                            {...props}
                            id={`${inputId}-max`}
                            name={name ? `${name}-max` : undefined}
                            type="range"
                            min={min}
                            max={max}
                            step={step}
                            value={upperValue}
                            onChange={handleChange("upper")}
                            disabled={disabled}
                            aria-label={ariaLabel ? `${ariaLabel}، بیشینه` : "بیشینه"}
                            aria-labelledby={hasLabel || ariaLabelledBy ? `${ariaLabelledBy ?? labelId} ${inputId}-max-label` : undefined}
                            className={inputClass}
                        />
                        <span id={`${inputId}-max-label`} className="sr-only">بیشینه</span>
                    </>
                ) : (
                    <input
                        {...props}
                        ref={ref}
                        id={inputId}
                        name={name}
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={upperValue}
                        onChange={handleChange("upper")}
                        disabled={disabled}
                        aria-label={ariaLabel}
                        aria-labelledby={ariaLabelledBy}
                        className={inputClass}
                    />
                )}
            </div>
        </div>
    );
};

export default RangeSlider;
