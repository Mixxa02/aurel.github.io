import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding container-grid text-center">
          <h1 className="headline-lg">Product not found</h1>
          <Link to="/shop" className="btn-outline mt-8 inline-block">Back to Shop</Link>
        </div>
      </Layout>
    );
  }

  const images = [product.image, product.hoverImage];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({ title: "Please select a size", variant: "destructive" });
      return;
    }
    addItem(product, selectedSize);
    toast({ title: "Added to bag", description: `${product.name} — Size ${selectedSize}` });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground tracking-wide">
              <li><Link to="/" className="link-underline">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="link-underline">Shop</Link></li>
              <li>/</li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-[3/4] bg-secondary rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === idx ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lg:py-8">
              {product.isNew && (
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                  New Arrival
                </span>
              )}
              <h1 className="headline-lg mb-2">{product.name}</h1>
              <p className="text-xl font-medium mb-6">€{product.price}</p>
              <p className="body-lg mb-8">{product.description}</p>

              {/* Size selector */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[3rem] px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "bg-foreground text-background"
                          : "bg-secondary text-foreground hover:bg-accent"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart */}
              <button onClick={handleAddToCart} className="btn-primary w-full mb-6">
                Add to Bag
              </button>

              {/* Details accordion */}
              <div className="border-t border-border">
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className="flex items-center justify-between w-full py-5"
                >
                  <span className="text-sm font-medium tracking-wider uppercase">Product Details</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${detailsOpen ? "rotate-180" : ""}`} />
                </button>
                {detailsOpen && (
                  <ul className="pb-5 space-y-2 animate-fade-in">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 body-sm">
                        <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-card">
        <div className="container-grid">
          <h2 className="headline-md mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
