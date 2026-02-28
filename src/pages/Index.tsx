import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";
import heroImage from "@/assets/hero.jpg";
import collectionBanner from "@/assets/collection-banner.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

return (
  <Layout>
    {/* Hero */}
    <section className="relative h-[85vh] sm:h-[90vh] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="AUREL Spring Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="relative container-grid pb-16 sm:pb-24 z-10">
        <div className="max-w-xl">
          <h1 className="headline-xl text-white mb-6 drop-shadow-lg fade-up">
            Quiet
            <br />
            Luxury
          </h1>

          <p
            className="text-base sm:text-lg text-white/85 mb-8 drop-shadow-md fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            The Spring 2026 Collection
          </p>

          <Link
            to="/shop"
            className="btn-primary fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Shop Now
          </Link>
        </div>
      </div>
      </section>
      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="flex items-end justify-between mb-12">
            <h2 className="headline-lg">Featured</h2>
            <Link to="/shop" className="link-underline text-sm font-medium tracking-wider uppercase">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={collectionBanner}
          alt="New Collection"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Jači gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-white/90 mb-3">
              Spring / Summer
            </p>

            <h2 className="headline-lg text-white mb-6 drop-shadow-lg">
              New Collection
            </h2>

            <Link
              to="/shop"
              className="btn-outline border-white text-white hover:bg-white hover:text-black transition"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="container-grid max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Philosophy</p>
          <h2 className="headline-lg mb-6">
            Less, but better.
          </h2>
          <p className="body-lg mb-8">
            At AUREL, we believe in the power of restraint. Every piece is designed to transcend seasons —
            crafted from the finest materials with meticulous attention to detail. Our commitment is to
            timeless elegance, not fleeting trends.
          </p>
          <Link to="/about" className="btn-outline">
            Our Story
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
