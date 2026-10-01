import Link from "next/link";
import clsx from "clsx";
import type React from "react";

export type BreadcrumbProps = {
    items: { label: string; href?: React.ComponentProps<typeof Link>["href"] }[];
    className?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
    return (
        <nav aria-label="مسیر صفحه" className={clsx("mb-6 text-sm", className)}>
            <ol className="flex flex-wrap items-center">
                {items.map((item, index) => {
                    const isCurrent = index === items.length - 1;

                    return (
                        <li key={index} aria-current={isCurrent ? "page" : undefined} className="break-words">
                            {index > 0 && <span aria-hidden="true" className="mx-2">/</span>}
                            {item.href && !isCurrent ? (
                                <Link href={item.href} className="text-brand-black/60 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={isCurrent ? "font-medium" : "text-brand-black/60"}>{item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
