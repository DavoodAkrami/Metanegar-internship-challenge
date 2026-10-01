import type React from "react";

export type HeaderProps = {
    title?: string;
    titleAsHeading?: boolean;
    rightButton?: React.ReactNode;
    leftButton?: React.ReactNode;
    children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
    title,
    titleAsHeading = false,
    rightButton,
    leftButton,
    children,
}) => (
    <header className="fixed inset-x-0 top-0 z-30 bg-surface-primary">
        <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-6 xl:px-8">
            <div className="flex h-16 items-center gap-3">
                {rightButton}
                {title && (titleAsHeading
                    ? <h1 className="text-headline-xs">{title}</h1>
                    : <p className="text-headline-xs">{title}</p>
                )}
                <span className="flex-1" aria-hidden="true" />
                {leftButton}
            </div>
            {children && <div className="pb-4">{children}</div>}
        </div>
    </header>
);

export default Header;
