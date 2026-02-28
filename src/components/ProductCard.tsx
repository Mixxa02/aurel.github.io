import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-image aspect-[3/4] relative bg-secondary rounded-lg overflow-hidden">
        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium tracking-[0.15em] uppercase rounded-full">
            New
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
        <p className="text-sm text-muted-foreground">€{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
