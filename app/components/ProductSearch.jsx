"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductSearch() {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [results, setResults] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`/api/v1/products?search=${debouncedQuery}`);
            const data = await res.json();

            if (data.success) {
                setResults(data.data);
            }
        };

        fetchProducts();
    }, [debouncedQuery]);

    const handleClear = () => {
        setQuery("");
        setDebouncedQuery("");
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Product Search</h1>

            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
                {query && (
                    <button
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                    >✕</button>
                )}
            </div>

            <p className="text-sm text-gray-500 mb-3">
                {results?.length} product{results?.length !== 1 ? "s" : ""} found
            </p>

            <div className="flex flex-col gap-3">
                {results?.length > 0 ? (
                    results?.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))
                ) : (
                    <p className="text-center text-gray-400 py-8">No products found.</p>
                )}
            </div>
        </div>
    );
}