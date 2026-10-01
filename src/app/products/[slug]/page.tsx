import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/ProductDetailPage";
import { products as productGroups } from "@/data/products";

const catalogProducts = Object.values(productGroups).flat();

export const generateStaticParams = () => catalogProducts.map(({ slug }) => ({ slug }));

const ProductPage = async ({ params }: PageProps<"/products/[slug]">) => {
    const { slug } = await params;
    const product = catalogProducts.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    return <ProductDetailPage {...product} slug={slug} />;
};

export default ProductPage;
