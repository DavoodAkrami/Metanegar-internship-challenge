import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
    src: "./fonts/Vazirmatn-Variable.ttf",
    weight: "100 900",
    variable: "--font-vazirmatn",
    display: "swap",
});

export const metadata: Metadata = {
    title: "فروشگاه اینترنتی | چالش متانگار",
    description: "فروشگاه اینترنتی نمونه با امکان جست‌وجو و فیلتر محصولات، مشاهده جزئیات و مدیریت سبد خرید.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="fa"
            dir="rtl"
            className={`${vazirmatn.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
