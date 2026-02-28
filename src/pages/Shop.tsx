import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { SlidersHorizontal, X } from "lucide-react";

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under €200", min: 0, max: 200 },
  { label: "€200 – €350", min: 200, max: 350 },
  { label: "Over €350", min: 350, max: Infinity },
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const range = priceRanges[selectedPriceRange];
    result = result.filter((p) => p.price >= range.min && p.price < range.max);

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h1 className="headline-lg">Shop</h1>
              <p className="body-sm mt-2">{filteredProducts.length} pieces</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Sort - desktop */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="hidden sm:block bg-transparent text-sm font-medium tracking-wide border border-border rounded-full px-4 py-2 focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {/* Filter toggle */}
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 text-sm font-medium tracking-wide border border-border rounded-full px-4 py-2 hover:bg-secondary transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Filters panel */}
          {filterOpen && (
            <div className="mb-10 p-6 bg-card rounded-xl border border-border animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-medium tracking-wider uppercase">Filters</h3>
                <button onClick={() => setFilterOpen(false)}><X className="w-4 h-4" /></button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Category */}
                <div>
                  <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                          selectedCategory === cat
                            ? "bg-foreground text-background"
                            : "bg-secondary text-foreground hover:bg-accent"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">Price</h4>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range, idx) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPriceRange(idx)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                          selectedPriceRange === idx
                            ? "bg-foreground text-background"
                            : "bg-secondary text-foreground hover:bg-accent"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort - mobile */}
                <div className="sm:hidden">
                  <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">Sort</h4>
                  <div className="flex flex-wrap gap-2">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setSortBy(opt.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                          sortBy === opt.value
                            ? "bg-foreground text-background"
                            : "bg-secondary text-foreground hover:bg-accent"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="body-lg">No products found matching your filters.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
