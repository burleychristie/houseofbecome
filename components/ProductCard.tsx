import React from "react";

type Product = {
  id: number | string;
  title: string;
  description?: string | null;
  price?: string | null;
  image_url?: string | null;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a href={`/products/${product.id}`} className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-150 bg-white">
      <div className="w-full h-64 bg-slate-100">
        <img src={product.image_url || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-ink">{product.title}</h3>
        {product.price && <div className="mt-2 text-sm text-gilded">${product.price}</div>}
      </div>
    </a>
  );
}