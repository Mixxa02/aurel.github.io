import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-grid text-center max-w-lg mx-auto">
            <h1 className="headline-lg mb-4">Your Bag</h1>
            <p className="body-lg mb-8">Your bag is empty.</p>
            <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-grid">
          <h1 className="headline-lg mb-12">Your Bag</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-0 divide-y divide-border">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-5 py-6 first:pt-0">
                  <Link to={`/product/${item.product.id}`} className="w-24 sm:w-32 flex-shrink-0">
                    <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-sm font-medium">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">Size: {item.size}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Remove"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 border border-border rounded-full">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="p-2"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="p-2"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">€{item.product.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 sm:p-8 border border-border sticky top-28">
                <h2 className="text-sm font-medium tracking-wider uppercase mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>€{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Complimentary</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>€{totalPrice}</span>
                  </div>
                </div>
                <button className="btn-primary w-full">Checkout</button>
                <Link to="/shop" className="block text-center mt-4 text-sm text-muted-foreground link-underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
