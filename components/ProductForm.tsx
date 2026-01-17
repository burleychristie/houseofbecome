"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ProductForm({ onSaved }: { onSaved?: () => void }) {
  const [title, setTitle] = useState(");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImageAndGetUrl = async (file: File) => {
    const id = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const { data, error } = await supabase.storage
      .from("products")
      .upload(id, file, { cacheControl: "3600", upsert: false });

    if (error) throw error;
    const { publicUrl } = supabase.storage.from("products").getPublicUrl(data.path);
    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let image_url = null;
      if (file) {
        image_url = (await uploadImageAndGetUrl(file)) as string;
      } else {
        image_url = "/placeholder.svg";
      }

      // Save product by calling server API (server uses service role key)
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          price: price || null,
          image_url,
          published: true,
        }),
      });

      if (!res.ok) throw new Error(await res.text());

      setTitle("");
      setDescription("");
      setPrice("");
      setFile(null);
      onSaved?.();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className="mt-1 block w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Price (optional)</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Image</label>
        <input onChange={(e) => setFile(e.target.files?.[0] || null)} type="file" accept="image/*" className="mt-1 block" />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <div>
        <button disabled={loading} type="submit" className="inline-flex items-center rounded-md bg-black text-white px-4 py-2">
          {loading ? "Saving..." : "Save product"}
        </button>
      </div>
    </form>
  );
}
