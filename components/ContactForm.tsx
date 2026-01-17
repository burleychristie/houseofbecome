"use client";

import React from "react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-3">
      <input
        type="email"
        placeholder="Email"
        className="w-full md:w-72 rounded-full bg-white/5 border border-white/15 px-5 py-3 text-sm placeholder:text-blush/40 ring-focus"
      />
      <button
        type="submit"
        className="rounded-full border border-gilded/60 px-6 py-3 text-sm hover:bg-gilded/10 ring-focus"
      >
        Join
      </button>
    </form>
  );
}