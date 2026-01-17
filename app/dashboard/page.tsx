"use client";

import React, { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";

type Product = {
  id: number;
  title: string;
  description: string;
  price?: string | null;
  image_url?: string | null;
  published?: boolean;
  created_at?: string;
};

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to load");
      const json = await res.json();
      setProducts(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Admin dashboard</h1>
          <p className="text-sm text-slate-600">Add products and images — they will appear on the public site.</p>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Add new product</h2>
          <ProductForm onSaved={fetchProducts} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          {loading ? (
            <div>Loading…</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <div key={p.id} className="border rounded p-4 flex gap-4">
                  <img src={p.image_url || "/placeholder.svg"} alt={p.title} className="w-28 h-28 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-slate-600">{p.description}</p>
                    <div className="mt-2 text-sm text-slate-500">{p.price ? `$${p.price}` : ""}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
