import Link from "next/link";
import clsx from "clsx";
import type React from "react";

export type BreadcrumbProps = {
    items: { label: string; href?: React.ComponentProps<typeof Link>["href"] }[];
    className?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
    return (
    <nav aria-label="مسیر صفحه" className={clsx("mb-6 text-label-sm", className)}>
            <ol className="flex flex-wrap items-center">
                {items.map((item, index) => {
                    const isCurrent = index === items.length - 1;

                    return (
                        <li key={index} aria-current={isCurrent ? "page" : undefined} className="break-words">
                            {index > 0 && <span aria-hidden="true" className="mx-2">/</span>}
                            {item.href && !isCurrent ? (
                                <Link href={item.href} className="text-content-secondary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus">
                                    {item.label}
                                </Link>
                            ) : (
                            <span className={isCurrent ? undefined : "text-content-secondary"}>{item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
