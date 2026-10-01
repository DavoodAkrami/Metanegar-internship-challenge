export type Product = {
    slug: string;
    title: string;
    category: string;
    price: number;
    oldPrice?: number;
    discountPercent?: number;
    description: string;
    images: { src: string; alt: string }[];
    Specifications: { key: string; value: string }[];
    colors: string[];
    sizes?: string[];
    stock: number;
    comments: { author: string; commentText: string; stars: number };
};

export const products = {
    shoes: [
        {
            slug: "product-001",
            title: "کفش کتانی روزمره",
            category: "کفش",
            price: 2400000,
            oldPrice: 2823529,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/29fb91cb4830e1e55cc104ca8da56fedc1b2faa2_1790431562.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کفش کتانی روزمره",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/737021ed49bcdf2c11d70200ca097c3a255259b2_1790431562.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کفش کتانی روزمره",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-002",
            title: "کفش پیاده‌روی سبک",
            category: "کفش",
            price: 2575000,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/b71786b76f1fc6c6df20d2d5308df097fcca1cd2_1755771219.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کفش پیاده‌روی سبک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/804bcebefb80bacbe7a8f521feb27dcbd4c9e02e_1782929433.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کفش پیاده‌روی سبک",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-003",
            title: "کفش ورزشی تنفس‌پذیر",
            category: "کفش",
            price: 2750000,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/6822b5876e11a3b607b3e8dd1a9a89cac063433d_1783434386.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کفش ورزشی تنفس‌پذیر",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/f0940ad9074033c2a5e27f5c54e99e342fbfcb3d_1783434386.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کفش ورزشی تنفس‌پذیر",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-004",
            title: "کتانی کلاسیک سفید",
            category: "کفش",
            price: 2925000,
            oldPrice: 3441176,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3aac0c12f21f76046ca5e5bec13912754e975b5b_1782818877.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کتانی کلاسیک سفید",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/de2e05972cfd13aa5120ba1d6f86f897be96e317_1754249923.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کتانی کلاسیک سفید",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-005",
            title: "کفش رانینگ حرفه‌ای",
            category: "کفش",
            price: 3100000,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/f5c0656e34935c10982b0bedeca7470fb502c20d_1786178065.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کفش رانینگ حرفه‌ای",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/bab2a1c1b64da019155f8eb91de0d893d313a2cf_1755787818.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کفش رانینگ حرفه‌ای",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-006",
            title: "کفش راحتی شهری",
            category: "کفش",
            price: 3275000,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/55febc0f7679a6b6930ca43bad212ab2d8002903_1782818875.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کفش راحتی شهری",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/07c899ad4281f2d97e328c2f6f3c17339efce470_1754239977.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کفش راحتی شهری",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-007",
            title: "کتانی روزانه مشکی",
            category: "کفش",
            price: 3450000,
            oldPrice: 4058824,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/12de7484808ee46ef80a9889c6f98e603cc34108_1783150287.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کتانی روزانه مشکی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/00f6953ce3a659d3b597eddf46b43477ae108e38_1734024524.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کتانی روزانه مشکی",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-008",
            title: "کفش تمرین انعطاف‌پذیر",
            category: "کفش",
            price: 3625000,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/6b55e9c4713e748932b174fc427993af90cd7caa_1736663179.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کفش تمرین انعطاف‌پذیر",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/56583df541a34d3f6d1da37eeccfc8a2966e3bd6_1736663179.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کفش تمرین انعطاف‌پذیر",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-009",
            title: "کفش اسپرت بندی",
            category: "کفش",
            price: 3800000,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/8a30f5b304fba1a1f4bad2bb5760a792792b0350_1782818873.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کفش اسپرت بندی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d41567531e5d0dfb8fb99a949152173d756f3015_1755771769.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کفش اسپرت بندی",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-010",
            title: "کتانی مینیمال",
            category: "کفش",
            price: 3975000,
            oldPrice: 4676471,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه طراحی شده و با رویهٔ راحت و زیرهٔ منعطف، حرکت طولانی را آسان‌تر می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/9f384bc3350aced7901248ca8ddf38870dafd297_1734024537.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کتانی مینیمال",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e0b63f3f988a1c1cefb45fadea85bdb6bc328239_1734024536.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کتانی مینیمال",
                },
            ],
            Specifications: [{ key: "رویه", value: "پارچه و الیاف مقاوم" }, { key: "زیره", value: "فوم سبک" }, { key: "کاربرد", value: "روزمره و پیاده‌روی" }, { key: "مناسب برای", value: "استفاده روزانه" }],
            colors: ["سفید", "مشکی", "طوسی"],
            sizes: ["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    apparel: [
        {
            slug: "product-011",
            title: "تی‌شرت نخی ساده",
            category: "پوشاک",
            price: 1250000,
            oldPrice: 1470588,
            discountPercent: 15,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/457f8dc8d7948a89d5a4776d7e03323775e176b5_1754428371.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی تی‌شرت نخی ساده",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/741b282c1faf66ca829590218bc29fd09aac1b45_1754202656.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر تی‌شرت نخی ساده",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-012",
            title: "تی‌شرت یقه‌گرد",
            category: "پوشاک",
            price: 1425000,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3aa247821a478f9061d17457e81bea53dd40efe6_1751463443.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی تی‌شرت یقه‌گرد",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/bfd388bcf9cdbf92f39e28ca17830db13110c56a_1683963618.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر تی‌شرت یقه‌گرد",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-013",
            title: "پیراهن روزمره",
            category: "پوشاک",
            price: 1600000,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/748e781b18aa3c70276b82ccada7092a61e0575c_1788124490.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پیراهن روزمره",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/aa43e2434e9b6bd457f43ab3b29973a7e85be696_1788124424.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پیراهن روزمره",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-014",
            title: "سویشرت سبک",
            category: "پوشاک",
            price: 1775000,
            oldPrice: 2088235,
            discountPercent: 15,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a9a68429673598a0aed22f3ba21c403c50dc0df3_1784355507.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی سویشرت سبک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/b59f1837ab3414d378ffab1ad1d25748fdf42343_1784355490.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر سویشرت سبک",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-015",
            title: "پولوشرت کلاسیک",
            category: "پوشاک",
            price: 1950000,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/58a7eba818e4d93a0e581a480fea118706d2572d_1782811893.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پولوشرت کلاسیک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/527da4f69c2b7cb6cf43d9235183c0e935447e01_1769370105.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پولوشرت کلاسیک",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-016",
            title: "تی‌شرت آستین‌بلند",
            category: "پوشاک",
            price: 2125000,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/454447c4af229b398cd8b2cad62c3eee27bfaba6_1771242364.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی تی‌شرت آستین‌بلند",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/6f4d9a6f2ef9d34e0fae520b215074c5c7e18529_1771242364.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر تی‌شرت آستین‌بلند",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-017",
            title: "هودی راحتی",
            category: "پوشاک",
            price: 2300000,
            oldPrice: 2705882,
            discountPercent: 15,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/891b98a6504d97fbba7724239ad4434539c3f96e_1767626469.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی هودی راحتی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d9c64d4a71a023f57ac5ed376f725c1cfbe7aab3_1757788038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر هودی راحتی",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-018",
            title: "پیراهن کتان",
            category: "پوشاک",
            price: 2475000,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/ff25c04ed19d1d4f5eda284b0260f871c345f7cc_1760956115.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پیراهن کتان",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/f99e95d9d56dab0006c0585ed725d0c4c6771283_1737623315.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پیراهن کتان",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-019",
            title: "تی‌شرت مینیمال",
            category: "پوشاک",
            price: 2650000,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/2229e0ffca4812607c5a24ba4c54ee2621b2ff58_1724398492.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی تی‌شرت مینیمال",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a398536b106f5758ab056a83b4bb6e040402cb6b_1724398487.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر تی‌شرت مینیمال",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-020",
            title: "ژاکت روزمره",
            category: "پوشاک",
            price: 2825000,
            oldPrice: 3323529,
            discountPercent: 15,
            description: "از پارچهٔ نرم و مناسب استفادهٔ روزمره تهیه شده است و برش راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/b934e28e3a7b498ff7e7018f438fd038119b840d_1790606860.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ژاکت روزمره",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/ad0f0749f796bdef614fb50096fa10648713d114_1728293158.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ژاکت روزمره",
                },
            ],
            Specifications: [{ key: "جنس", value: "ترکیب پنبه" }, { key: "فرم", value: "راحت" }, { key: "شست‌وشو", value: "ماشین لباس‌شویی" }, { key: "نوع پوشش", value: "روزمره" }],
            colors: ["سفید", "مشکی", "آبی", "سبز"],
            sizes: ["S", "M", "L", "XL"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    bags: [
        {
            slug: "product-021",
            title: "کیف دوشی چرمی",
            category: "کیف و کوله‌پشتی",
            price: 2100000,
            oldPrice: 2470588,
            discountPercent: 15,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/1ea795a26a21b2398d0c7e050006e147e2f87ba3_1755515392.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف دوشی چرمی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/c89d47625a2f863f6e79d5cfb58db8ecbeac7c23_1754849353.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف دوشی چرمی",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-022",
            title: "کیف دستی روزمره",
            category: "کیف و کوله‌پشتی",
            price: 2275000,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/f658b46349973e2a4fd4e28253f4a39c5ccc9ba4_1771602291.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف دستی روزمره",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a92b5230cf8942921c87c6ef864623052521d589_1771602261.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف دستی روزمره",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-023",
            title: "کیف پول جیبی",
            category: "کیف و کوله‌پشتی",
            price: 2450000,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e7a9ba48f9a20c367e60399bbc89a8f7f5466495_1786870537.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف پول جیبی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/cdb1e6c883b965ca1560b898befb2568cae8ede7_1749122783.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف پول جیبی",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-024",
            title: "کوله‌پشتی شهری",
            category: "کیف و کوله‌پشتی",
            price: 2625000,
            oldPrice: 3088235,
            discountPercent: 15,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3074635d4a0f3bf1fc38e3c06bbf5134c4e6a01c_1745328650.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کوله‌پشتی شهری",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/944efff1bb74d739cfdff00dae7eff76a30a53cc_1789211144.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کوله‌پشتی شهری",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-025",
            title: "کیف لپ‌تاپ سبک",
            category: "کیف و کوله‌پشتی",
            price: 2800000,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/18d3de501d0a70acf6b349e454bc494f8493d282_1786298376.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف لپ‌تاپ سبک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/713344ffff4e113a83cfa18745ebd14ccd8e1fc6_1683655612.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف لپ‌تاپ سبک",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-026",
            title: "کیف کمری جمع‌وجور",
            category: "کیف و کوله‌پشتی",
            price: 2975000,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/1f18d820c6eea19f402abc801ad0a45ba8ac382f_1753698560.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف کمری جمع‌وجور",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/fc5cc3580d6942584842be677ef2cd3bea4976f2_1789211222.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف کمری جمع‌وجور",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-027",
            title: "کیف رودوشی کلاسیک",
            category: "کیف و کوله‌پشتی",
            price: 3150000,
            oldPrice: 3705882,
            discountPercent: 15,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/198642071c2eecf091a7b3cfef7fd9a235f34c92_1786871389.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف رودوشی کلاسیک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/4795153802f68582b9ea5180c6a883af1a4df361_1594460964.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف رودوشی کلاسیک",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-028",
            title: "کوله‌پشتی روزانه",
            category: "کیف و کوله‌پشتی",
            price: 3325000,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/8ed92756edf287aa16a8f26ebd98aed7e8b50ed5_1754236060.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کوله‌پشتی روزانه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/7f27912b34052df54fc7477e57a3139590f56759_1789210891.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کوله‌پشتی روزانه",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-029",
            title: "کیف مدارک",
            category: "کیف و کوله‌پشتی",
            price: 3500000,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a407692577478129f546af1e2fc4d708c2434a83_1786870532.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف مدارک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/121716386.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف مدارک",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-030",
            title: "کیف دستی مینیمال",
            category: "کیف و کوله‌پشتی",
            price: 3675000,
            oldPrice: 4323529,
            discountPercent: 15,
            description: "فضای داخلی کاربردی و طراحی جمع‌وجور آن، حمل وسایل روزمره را ساده می‌کند.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/b5ac62d6ad45e7ce8f4141d50e03c5b6b8e91653_1779774504.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیف دستی مینیمال",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/06415c1d30175fd76c65d72cb3b7f45b290f945e_1763363796.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیف دستی مینیمال",
                },
            ],
            Specifications: [{ key: "جنس", value: "چرم مصنوعی" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربرد", value: "روزمره" }, { key: "طراحی", value: "کاربردی" }],
            colors: ["قهوه‌ای", "مشکی", "کرم"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    watches: [
        {
            slug: "product-031",
            title: "ساعت مچی کلاسیک",
            category: "ساعت و اکسسوری",
            price: 3800000,
            oldPrice: 4470588,
            discountPercent: 15,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/660e4794a27eea149950f445a7501e0b59917040_1708098875.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت مچی کلاسیک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a860d3a52b95144227e2523784ca7f9ccc37e579_1708098874.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت مچی کلاسیک",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-032",
            title: "ساعت بند چرمی",
            category: "ساعت و اکسسوری",
            price: 3975000,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/99049e2068c4463d49879ebc6070f9731a189bfa_1692657490.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت بند چرمی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/7cbdcc8e9ddc64d7019581ad9c4c372ae6a7d6c9_1692657504.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت بند چرمی",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-033",
            title: "ساعت صفحه سفید",
            category: "ساعت و اکسسوری",
            price: 4150000,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3576acd12c2af93c541a55853a317f58bc68ba74_1718786286.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت صفحه سفید",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3212873.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت صفحه سفید",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-034",
            title: "ساعت اسپرت روزانه",
            category: "ساعت و اکسسوری",
            price: 4325000,
            oldPrice: 5088235,
            discountPercent: 15,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/c3b542b7456f0ec85be992a50b8a00fcac2b7eda_1757461219.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت اسپرت روزانه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/104470c6fc917cc87bf5b998643d08b11821fd95_1757461217.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت اسپرت روزانه",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-035",
            title: "ساعت فلزی مینیمال",
            category: "ساعت و اکسسوری",
            price: 4500000,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/0cefe3824297ea7249cc34883e8f975dbf73fc9b_1722723780.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت فلزی مینیمال",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/cdc79325030a708392aca73d1cf7787b4bd6231e_1722723787.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت فلزی مینیمال",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-036",
            title: "ساعت عقربه‌ای ساده",
            category: "ساعت و اکسسوری",
            price: 4675000,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/63c1b0098b654a271097dba0e651ed19eb4f12ef_1632906281.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت عقربه‌ای ساده",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/82708fe2e4d3cdcf761751e7a66bc6f60c7376c4_1632849775.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت عقربه‌ای ساده",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-037",
            title: "ساعت بند مشکی",
            category: "ساعت و اکسسوری",
            price: 4850000,
            oldPrice: 5705882,
            discountPercent: 15,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/fb7debaeacdb2f504424c0c52003bcdd73d50b8f_1765149073.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت بند مشکی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/53d6f1465a99234852c5dca97f0c9374f68f4b79_1765149070.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت بند مشکی",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-038",
            title: "ساعت کرونوگراف",
            category: "ساعت و اکسسوری",
            price: 5025000,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/022ba2eb922a6cc536362fd6ed3f189190ba97ef_1734979787.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت کرونوگراف",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d980f5bd6a33c7bef81e82a69e5da8c257ad8164_1734979789.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت کرونوگراف",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-039",
            title: "ساعت مچی رسمی",
            category: "ساعت و اکسسوری",
            price: 5200000,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/b845379c65df961b034eaebfddb299625ee1fc72_1754485498.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت مچی رسمی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d2f750e47f311898f43afe5c165a3e670d69fd2a_1759509082.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت مچی رسمی",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-040",
            title: "ساعت روزمره مقاوم",
            category: "ساعت و اکسسوری",
            price: 5375000,
            oldPrice: 6323529,
            discountPercent: 15,
            description: "ساعتی خوش‌خوان با طراحی متعادل که برای موقعیت‌های روزمره و رسمی مناسب است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/ee9bb3d97eb794191b607e664efd58eb66d5b5a6_1788339395.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت روزمره مقاوم",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3097c91875eb8969bf0a5a348d4084057691d88e_1788339397.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت روزمره مقاوم",
                },
            ],
            Specifications: [{ key: "نوع موتور", value: "کوارتز" }, { key: "نمایشگر", value: "عقربه‌ای" }, { key: "بند", value: "قابل تنظیم" }, { key: "کاربری", value: "روزمره و رسمی" }],
            colors: ["مشکی", "نقره‌ای", "قهوه‌ای"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    audio: [
        {
            slug: "product-041",
            title: "هدفون بی‌سیم دورگوشی",
            category: "لوازم صوتی",
            price: 3200000,
            oldPrice: 3764706,
            discountPercent: 15,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/5728b44fc320d0dae9be1a5a823385aa664de51f_1786571900.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی هدفون بی‌سیم دورگوشی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/055d4e1e19a4a1078cd212db568bc95f9a756650_1790022637.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر هدفون بی‌سیم دورگوشی",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-042",
            title: "هدفون بلوتوثی سبک",
            category: "لوازم صوتی",
            price: 3375000,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/4a8a14644dea728edad9499836d45b827a3457f7_1786533655.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی هدفون بلوتوثی سبک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/c710aa0b2c2453d466859e71fe09ba6f8f4241a2_1790021323.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر هدفون بلوتوثی سبک",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-043",
            title: "ایربادز بی‌سیم",
            category: "لوازم صوتی",
            price: 3550000,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/c833f9af9cc59ea0fd3e0200011fd27731f0f8af_1786571880.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ایربادز بی‌سیم",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/47253d3d200446771fd7be0c5c68545a71728ce9_1745827634.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ایربادز بی‌سیم",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-044",
            title: "اسپیکر قابل‌حمل",
            category: "لوازم صوتی",
            price: 3725000,
            oldPrice: 4382353,
            discountPercent: 15,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d2a3fb0dbb18bac62efbd01747848e32f73deb02_1786652969.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی اسپیکر قابل‌حمل",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/83e28d3bdabab1f58428c60edd856476463b5eef_1787686458.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر اسپیکر قابل‌حمل",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-045",
            title: "هدفون روگوشی",
            category: "لوازم صوتی",
            price: 3900000,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/50197fbc8ed53602ded8207b8b3dc48339f92422_1786533645.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی هدفون روگوشی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/05fb887a4569ab2b0ad4c85e9793493ad49567db_1790021313.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر هدفون روگوشی",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-046",
            title: "اسپیکر رومیزی",
            category: "لوازم صوتی",
            price: 4075000,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/4df6fa96306c87f9245ca2cad156a8553956146d_1754835623.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی اسپیکر رومیزی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/4df6fa96306c87f9245ca2cad156a8553956146d_1754237526.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر اسپیکر رومیزی",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-047",
            title: "هدفون مکالمه",
            category: "لوازم صوتی",
            price: 4250000,
            oldPrice: 5000000,
            discountPercent: 15,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3185d03bb15ba0b7a264609cde8fbe0867f81bba_1786533646.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی هدفون مکالمه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/2c14c030082b0b81b9e7f2dffd422cf74a1b0ccc_1790022627.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر هدفون مکالمه",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-048",
            title: "ایربادز روزمره",
            category: "لوازم صوتی",
            price: 4425000,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/02cb5f8e1a76e20b4c11838f47ce8f4241a30bdc_1786533657.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ایربادز روزمره",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/1e610b659b18f7124b7c07e7e01c3d7df0a3be6d_1790021325.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ایربادز روزمره",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-049",
            title: "اسپیکر بلوتوثی کوچک",
            category: "لوازم صوتی",
            price: 4600000,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/486a194c7ec2d48aa2ba5503ec1f001d4f86f686_1786652976.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی اسپیکر بلوتوثی کوچک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e8f350f973b9a2500fc0c01a563fb59291a3272d_1787686450.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر اسپیکر بلوتوثی کوچک",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-050",
            title: "هدفون تاشو",
            category: "لوازم صوتی",
            price: 4775000,
            oldPrice: 5617647,
            discountPercent: 15,
            description: "برای گوش‌دادن به موسیقی و استفادهٔ روزمره ساخته شده و اتصال بی‌سیم راحتی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/270c4d8e71de635fe4c2677913ef60dc1b099b30_1786533647.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی هدفون تاشو",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/5be7d2dbb7bb3796ba1ac349ce2721d19415ada6_1790021315.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر هدفون تاشو",
                },
            ],
            Specifications: [{ key: "اتصال", value: "بلوتوث" }, { key: "میکروفون", value: "داخلی" }, { key: "کاربرد", value: "موسیقی و مکالمه" }, { key: "ویژگی", value: "پخش صدای واضح" }],
            colors: ["مشکی", "سفید", "کرم"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    electronics: [
        {
            slug: "product-051",
            title: "پایه نگهدارنده گوشی",
            category: "لوازم الکترونیکی",
            price: 5600000,
            oldPrice: 6588235,
            discountPercent: 15,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/dad8aa6a8446c6f285599b3f48ba321aafcabe1f_1786653633.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پایه نگهدارنده گوشی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/f5b43fa083861c6f5fd88ab715e1ec97b9945d0a_1594470285.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پایه نگهدارنده گوشی",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-052",
            title: "شارژر سریع USB-C",
            category: "لوازم الکترونیکی",
            price: 5775000,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/1a0a0c5500b2c36282e23400a168da2666e5f7e3_1757322183.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی شارژر سریع USB-C",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/acff40367c2b57ad65af4a06498b24e88cec0345_1720271394.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر شارژر سریع USB-C",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-053",
            title: "پاوربانک همراه",
            category: "لوازم الکترونیکی",
            price: 5950000,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e04983bb86fe2b2b582f1ad9f037a5352356ffdd_1786910556.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پاوربانک همراه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/da73291c257c1d4f2c81007a81b1ae4b68561f4c_1787684193.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پاوربانک همراه",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-054",
            title: "پایه رومیزی تبلت",
            category: "لوازم الکترونیکی",
            price: 6125000,
            oldPrice: 7205882,
            discountPercent: 15,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/fc9826d76288ea5cd4b22dde5d15bf9d4bdfdfc9_1786653631.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پایه رومیزی تبلت",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/37773501b6a281012bf8b6a1b88d236a4e6de9bc_1635248037.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پایه رومیزی تبلت",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-055",
            title: "کابل شارژ مقاوم",
            category: "لوازم الکترونیکی",
            price: 6300000,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/9847ea07a0b76d3521ab5bbc4861158a08582f03_1786575868.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کابل شارژ مقاوم",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/3a5b9003155335dcfcc2a50d60c0fef8c12ca8d6_1786650490.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کابل شارژ مقاوم",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-056",
            title: "ماوس بی‌سیم",
            category: "لوازم الکترونیکی",
            price: 6475000,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/810aebc031cbbe755e094102c634d4bf0b401027_1786388215.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ماوس بی‌سیم",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/47f62e1d361ca3b824b62e18261125df8de08cbd_1754236386.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ماوس بی‌سیم",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-057",
            title: "کیبورد جمع‌وجور",
            category: "لوازم الکترونیکی",
            price: 6650000,
            oldPrice: 7823529,
            discountPercent: 15,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/446470d3580050f355d32c559bf2c6ac0eeebb07_1786296560.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کیبورد جمع‌وجور",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a14524452435d5810fc726d8dafbaf220ec5b0f9_1788610641.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کیبورد جمع‌وجور",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-058",
            title: "هاب چندپورت",
            category: "لوازم الکترونیکی",
            price: 6825000,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/1391103.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی هاب چندپورت",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/1391148.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر هاب چندپورت",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-059",
            title: "شارژر بی‌سیم",
            category: "لوازم الکترونیکی",
            price: 7000000,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/4c6c41005f69daa4fcac5100e75bdca6da934fee_1781702722.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی شارژر بی‌سیم",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/c4a07e23cfd582604b182a2da732c0a97473238a_1781773775.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر شارژر بی‌سیم",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-060",
            title: "پایه نگهدارنده لپ‌تاپ",
            category: "لوازم الکترونیکی",
            price: 7175000,
            oldPrice: 8441176,
            discountPercent: 15,
            description: "ابزاری کاربردی برای میز کار و استفادهٔ روزانه با طراحی ساده و جمع‌وجور.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/cc227a4b8026ea7a8c9e01ea79c871fc27a57b3f_1646556735.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پایه نگهدارنده لپ‌تاپ",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/6b2e846c26d41a1268f26c7128ff16830056f32f_1790021314.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پایه نگهدارنده لپ‌تاپ",
                },
            ],
            Specifications: [{ key: "سازگاری", value: "دستگاه‌های استاندارد" }, { key: "جنس", value: "پلاستیک مقاوم و فلز" }, { key: "کاربرد", value: "خانه و محل کار" }, { key: "قابلیت حمل", value: "دارد" }],
            colors: ["مشکی", "سفید", "خاکستری"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    homeAndDecor: [
        {
            slug: "product-061",
            title: "چراغ رومیزی مینیمال",
            category: "خانه و دکور",
            price: 2750000,
            oldPrice: 3235294,
            discountPercent: 15,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/73310dd5ffa7315aa9524962438c17a60410c76e_1785851495.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی چراغ رومیزی مینیمال",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/8e51ba10a22c68fb3c2791fba3464787427758e0_1785851464.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر چراغ رومیزی مینیمال",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-062",
            title: "گلدان سرامیکی",
            category: "خانه و دکور",
            price: 2925000,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/2730ce9f5725905da3086090888a47e010df2005_1660665308.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی گلدان سرامیکی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/33f91e8f0ff3fa29516e7e7f28a29bf9888beb81_1660644247.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر گلدان سرامیکی",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-063",
            title: "صندلی دکوراتیو",
            category: "خانه و دکور",
            price: 3100000,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/1cb3b536b2657767697f21e98fa40ca19275da3d_1777818299.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی صندلی دکوراتیو",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a1d165953027dbf1d9f715c50665bd0a0607a068_1651498662.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر صندلی دکوراتیو",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-064",
            title: "آباژور کنار تخت",
            category: "خانه و دکور",
            price: 3275000,
            oldPrice: 3852941,
            discountPercent: 15,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/dc7b298b297bbeee2e6546764d87a56b8b7e83ee_1777981981.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی آباژور کنار تخت",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/0a4fed9317edd777dce45ff8551e80ae5336ccd1_1785917028.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر آباژور کنار تخت",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-065",
            title: "ظرف دکوری ساده",
            category: "خانه و دکور",
            price: 3450000,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/37085df3fc5992311244a481cceeb42580bd8788_1786788527.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ظرف دکوری ساده",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d35e494e57b47720616d528329f346904eec243e_1756313747.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ظرف دکوری ساده",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-066",
            title: "چراغ مطالعه",
            category: "خانه و دکور",
            price: 3625000,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a80f46753ea10e5ba5cbc5b624a7e0c5bac80b7d_1740122739.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی چراغ مطالعه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a95a183b3f0b5b7c6991eaa9c59b00a0e046f86b_1786360186.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر چراغ مطالعه",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-067",
            title: "گلدان رومیزی",
            category: "خانه و دکور",
            price: 3800000,
            oldPrice: 4470588,
            discountPercent: 15,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/36dead262a93f00caee501a915d0339b2b43219b_1778074834.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی گلدان رومیزی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/515f565833a1da5baddb72af0ef04533efb4e5db_1761940173.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر گلدان رومیزی",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-068",
            title: "ساعت دیواری مدرن",
            category: "خانه و دکور",
            price: 3975000,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/74d439da43e8da1542e9d91a738adf46a2d20b27_1724675463.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ساعت دیواری مدرن",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/95a38969b6647e0cdd54dd6f912c3a24e903ae32_1740147329.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ساعت دیواری مدرن",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-069",
            title: "جاشمعی سرامیکی",
            category: "خانه و دکور",
            price: 4150000,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/68a6263bb82fb595533376cd76d4d41bbd443f5f_1784988572.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی جاشمعی سرامیکی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/7747cbc1c9c15e2987b57247eca72f1cf262d449_1625819128.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر جاشمعی سرامیکی",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-070",
            title: "چراغ خواب کوچک",
            category: "خانه و دکور",
            price: 4325000,
            oldPrice: 5088235,
            discountPercent: 15,
            description: "با فرم ساده و رنگ‌های خنثی، به‌راحتی با چیدمان خانه هماهنگ می‌شود.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/758420c66774c22117d6b35e408932fb958fdb1a_1732809163.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی چراغ خواب کوچک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/78a6459c8b9bb243d49944ff866b4061431265be_1732809113.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر چراغ خواب کوچک",
                },
            ],
            Specifications: [{ key: "سبک", value: "مدرن و مینیمال" }, { key: "جنس", value: "ترکیب فلز و سرامیک" }, { key: "کاربرد", value: "دکور خانه" }, { key: "محل استفاده", value: "فضای داخلی" }],
            colors: ["سفید", "کرم", "مشکی"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    kitchen: [
        {
            slug: "product-071",
            title: "ماگ سرامیکی",
            category: "لوازم آشپزخانه",
            price: 950000,
            oldPrice: 1117647,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d7d936db1559bdcf718fa036471c693c2896d243_1785226599.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ماگ سرامیکی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/bd670043f61ffe60fce406826e95d5f1ba3fe3e9_1652622591.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ماگ سرامیکی",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-072",
            title: "فنجان قهوه",
            category: "لوازم آشپزخانه",
            price: 1125000,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/ab543012a3dd000085f810ae733704c45d2d0f07_1788164115.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی فنجان قهوه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/8454d581054f8780ebee3362f1d826f93c4645c7_1700639712.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر فنجان قهوه",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-073",
            title: "بطری آب روزانه",
            category: "لوازم آشپزخانه",
            price: 1300000,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/43e45aade0d080a8558b737e5ba419bbabb81782_1784551495.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی بطری آب روزانه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/09caa2eade38c9b406b8f71a1b9f953283f276b3_1731851616.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر بطری آب روزانه",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-074",
            title: "ظرف نگهدارنده",
            category: "لوازم آشپزخانه",
            price: 1475000,
            oldPrice: 1735294,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/8352544d8788e70436b251547ec110d4f114451b_1787467950.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ظرف نگهدارنده",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/480e54730d94b4e5f2fd8842d2ae46cf9497bb34_1767976675.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ظرف نگهدارنده",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-075",
            title: "قاشق اندازه‌گیری",
            category: "لوازم آشپزخانه",
            price: 1650000,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/f4f3a86b7551afd33321b4cefda95b4c5428c0f6_1712748739.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی قاشق اندازه‌گیری",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/06c3d85ac67708e3ec489cfd3f5523140ade3586_1712748739.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر قاشق اندازه‌گیری",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-076",
            title: "لیوان دوجداره",
            category: "لوازم آشپزخانه",
            price: 1825000,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/5b12b27e17150d0a255714c9ca924d709979196e_1788163982.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی لیوان دوجداره",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/72aefb1fa5448e728d16605722689c1e13cac3f5_1706894305.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر لیوان دوجداره",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-077",
            title: "قوری دم‌آوری",
            category: "لوازم آشپزخانه",
            price: 2000000,
            oldPrice: 2352941,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/5cb2047d8cb3e56deaf3a12fc2de4c68a38f6c25_1634483597.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی قوری دم‌آوری",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/69a1ac957d213e017d5d0b786de31a656464ea31_1634483338.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر قوری دم‌آوری",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-078",
            title: "تراول ماگ",
            category: "لوازم آشپزخانه",
            price: 2175000,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/59db7c86a8982cf29ff26242cba36e7d854293ab_1738753210.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی تراول ماگ",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/b9bcd92d94b3afdc6baecacfa01efe310a6444df_1789211053.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر تراول ماگ",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-079",
            title: "پارچ شیشه‌ای",
            category: "لوازم آشپزخانه",
            price: 2350000,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/7060da534f76acba11df26822e15e4384ddd92ef_1788160906.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی پارچ شیشه‌ای",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/aab85295e11314a4eef0ef6fc44de497f35d7195_1723390083.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر پارچ شیشه‌ای",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-080",
            title: "ظرف سرو سرامیکی",
            category: "لوازم آشپزخانه",
            price: 2525000,
            oldPrice: 2970588,
            discountPercent: 15,
            description: "برای استفادهٔ روزانه در آشپزخانه طراحی شده و نگهداری و شست‌وشوی آسانی دارد.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/48df27dea0324c94d6524d3b7ed100c73d280c67_1719156296.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ظرف سرو سرامیکی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/93197ef7e647078d58416f059ea7e00a78d75531_1719156318.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ظرف سرو سرامیکی",
                },
            ],
            Specifications: [{ key: "جنس", value: "سرامیک" }, { key: "قابل شست‌وشو", value: "بله" }, { key: "کاربرد", value: "آشپزخانه و نوشیدنی" }, { key: "سبک", value: "ساده و کاربردی" }],
            colors: ["سفید", "کرم", "قهوه‌ای"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    skincare: [
        {
            slug: "product-081",
            title: "کرم مرطوب‌کننده روزانه",
            category: "مراقبت پوست",
            price: 1450000,
            oldPrice: 1705882,
            discountPercent: 15,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/d959917a416463fb231b000e0d2a2d9b8c5a4ac2_1788869277.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کرم مرطوب‌کننده روزانه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/8daf570bc097823e487396c42c92906415f1b2cb_1788953347.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کرم مرطوب‌کننده روزانه",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-082",
            title: "کرم دست نرم‌کننده",
            category: "مراقبت پوست",
            price: 1625000,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/c495f6449be98ba24de6a79f699bd8b9e8a1333e_1755787543.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کرم دست نرم‌کننده",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/5d21a914864a5373252e65bac28d5b883358508e_1788953427.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کرم دست نرم‌کننده",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-083",
            title: "سرم آبرسان صورت",
            category: "مراقبت پوست",
            price: 1800000,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/51f81d4f1f85176d1028df0c557ccb3495e0dbc9_1786372401.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی سرم آبرسان صورت",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e213e5921af161a3c31c5eac883a4eefe4a1cd15_1788955274.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر سرم آبرسان صورت",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-084",
            title: "ژل شست‌وشوی صورت",
            category: "مراقبت پوست",
            price: 1975000,
            oldPrice: 2323529,
            discountPercent: 15,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/a603c0cb39f4fd6453e7e4d8a100fd57a76fb9b2_1785495388.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ژل شست‌وشوی صورت",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e934a7600aea7da530ac620f7cb29c737385ad00_1788448493.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ژل شست‌وشوی صورت",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-085",
            title: "کرم شب سبک",
            category: "مراقبت پوست",
            price: 2150000,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/dea8e473c1e2a2e4b3720bb8f32e43b4a4835f41_1729080548.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کرم شب سبک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/ce5a5455b50a0ff7517d7bfc334d2fcfb59a960a_1788955263.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کرم شب سبک",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-086",
            title: "لوسیون بدن",
            category: "مراقبت پوست",
            price: 2325000,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/5a6062836823260ae42972164ed402b723acc5f5_1788942923.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی لوسیون بدن",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/7551f172c2d63dab88dc3be7a899141a93abfbf2_1784211735.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر لوسیون بدن",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-087",
            title: "بالم لب مرطوب‌کننده",
            category: "مراقبت پوست",
            price: 2500000,
            oldPrice: 2941176,
            discountPercent: 15,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/cfbf7a73d7e3580666d8ba2a9cfb00cb7ed4a35d_1785437989.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی بالم لب مرطوب‌کننده",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e39701768eceb1c27b0641586b02372308eeb123_1788376165.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر بالم لب مرطوب‌کننده",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-088",
            title: "تونر صورت ملایم",
            category: "مراقبت پوست",
            price: 2675000,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/6a62826406d4e688cc7d980cf0884b195b5d9467_1785337769.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی تونر صورت ملایم",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/27556609f5e1b301a7267bad23ff476f79c6adf7_1788449785.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر تونر صورت ملایم",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-089",
            title: "ضدآفتاب روزانه",
            category: "مراقبت پوست",
            price: 2850000,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/782746ccfac39bc2b79faf08e09ddc28bf2b4641_1753697890.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ضدآفتاب روزانه",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/2e0b541a9b84805f6e3e43160ccfe1e4b1032fb0_1723367011.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ضدآفتاب روزانه",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-090",
            title: "ماسک آبرسان صورت",
            category: "مراقبت پوست",
            price: 3025000,
            oldPrice: 3558824,
            discountPercent: 15,
            description: "محصول مراقبت شخصی برای استفادهٔ منظم و تکمیل روتین روزانهٔ پوست.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/76ebdd7b00174508804f4e744c571c3914c6cd98_1788945727.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی ماسک آبرسان صورت",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/0d32497bbc6658cbd6a2aa0f47efce6416a105fe_1789212438.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر ماسک آبرسان صورت",
                },
            ],
            Specifications: [{ key: "نوع پوست", value: "انواع پوست" }, { key: "زمان استفاده", value: "روزانه" }, { key: "حجم", value: "۵۰ میلی‌لیتر" }, { key: "کاربرد", value: "مراقبت از پوست" }],
            colors: ["بی‌رنگ"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ],
    fitness: [
        {
            slug: "product-091",
            title: "دمبل روکش‌دار ۲ کیلوگرمی",
            category: "ورزش و تناسب‌اندام",
            price: 1850000,
            oldPrice: 2176471,
            discountPercent: 15,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/286555.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی دمبل روکش‌دار ۲ کیلوگرمی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/567491abd1d570e4acdf3a7260b2f26857a8a12d_1784194681.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر دمبل روکش‌دار ۲ کیلوگرمی",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 3,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-092",
            title: "کش تمرینی مقاومتی",
            category: "ورزش و تناسب‌اندام",
            price: 2025000,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/310028134d6339099935eca9a6e5822e89cf1fd8_1696446343.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کش تمرینی مقاومتی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/4f46580de950d4734da769a0bd20c6f9e9206c68_1696446341.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کش تمرینی مقاومتی",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 5,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-093",
            title: "طناب ورزشی قابل تنظیم",
            category: "ورزش و تناسب‌اندام",
            price: 2200000,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/37a737452582da9a7dc78d933d30eb2dfb4268d0_1676131013.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی طناب ورزشی قابل تنظیم",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/7ddadd7bb66110d58a3067f3f8729f55743f8646_1676132348.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر طناب ورزشی قابل تنظیم",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 7,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-094",
            title: "مت یوگا سبک",
            category: "ورزش و تناسب‌اندام",
            price: 2375000,
            oldPrice: 2794118,
            discountPercent: 15,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/f85eaf7f7257899af899362abce62be673bbb4b9_1708152392.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی مت یوگا سبک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/56f0bfe83c150231af1b3d0da0f1995435dd7983_1708152389.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر مت یوگا سبک",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 9,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-095",
            title: "قمقمه ورزشی",
            category: "ورزش و تناسب‌اندام",
            price: 2550000,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/71d125081e24b9d2ad4c5a589b0f311f15ecafa6_1777990166.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی قمقمه ورزشی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/6b1d632186d151eab895bfe4c75f65da735bbea6_1789210910.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر قمقمه ورزشی",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 11,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-096",
            title: "دمبل روکش‌دار ۵ کیلوگرمی",
            category: "ورزش و تناسب‌اندام",
            price: 2725000,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/2534570.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی دمبل روکش‌دار ۵ کیلوگرمی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/91d10cc748b4d19f13eddecb427c9b0ad5251d03_1784194684.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر دمبل روکش‌دار ۵ کیلوگرمی",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 13,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-097",
            title: "توپ تمرین کوچک",
            category: "ورزش و تناسب‌اندام",
            price: 2900000,
            oldPrice: 3411765,
            discountPercent: 15,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/e40cdcdbacf5bba0ae33ce345f0ac21c695719e4_1788947317.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی توپ تمرین کوچک",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/4486693fa6c5fa42a1d738f99fb5f4944cf8b73e_1666084403.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر توپ تمرین کوچک",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 15,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-098",
            title: "مچ‌بند ورزشی",
            category: "ورزش و تناسب‌اندام",
            price: 3075000,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/276222a7ffcd78bb812d29c291305833ebd12a84_1663108318.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی مچ‌بند ورزشی",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/ecea6c8fd944c08f57b6bfd6cf1a815edccb8353_1663108319.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر مچ‌بند ورزشی",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 17,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        },
        {
            slug: "product-099",
            title: "حلقه پیلاتس",
            category: "ورزش و تناسب‌اندام",
            price: 3250000,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/cd6620d2a443a7b567dbd33d2c48c3ac2c80e578_1788947114.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی حلقه پیلاتس",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/117684208.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر حلقه پیلاتس",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 0,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 5,
            },
        },
        {
            slug: "product-100",
            title: "کش بدنسازی چندحالته",
            category: "ورزش و تناسب‌اندام",
            price: 3425000,
            oldPrice: 4029412,
            discountPercent: 15,
            description: "وسیله‌ای کاربردی برای تمرین در خانه یا باشگاه که به‌سادگی قابل نگهداری است.",
            images: [
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/c3f5537a048ebb4974f3dce3400ef58083a40bed_1649425921.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای اصلی کش بدنسازی چندحالته",
                },
                {
                    src: "https://dkstatics-public.digikala.com/digikala-products/cd6571ddd034b0443ce16452fb4278cb22a69b8b_1649412966.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                    alt: "نمای دیگر کش بدنسازی چندحالته",
                },
            ],
            Specifications: [{ key: "کاربرد", value: "تمرین در خانه و باشگاه" }, { key: "جنس", value: "مواد مقاوم" }, { key: "سطح استفاده", value: "مبتدی تا متوسط" }, { key: "نوع تمرین", value: "خانگی و باشگاهی" }],
            colors: ["مشکی", "آبی", "سبز"],
            stock: 21,
            comments: {
                author: "مریم رضایی",
                commentText: "کیفیت و کاربرد محصول مطابق توضیحات بود و از خرید آن راضی هستم.",
                stars: 4,
            },
        }
    ]
} satisfies Record<string, Product[]>;
