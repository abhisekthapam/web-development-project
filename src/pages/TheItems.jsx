import { useState, useEffect } from "react";
import axios from "axios";
import TheImageMagnifier from "../admin/admin-components/TheImageMagnifier";
import TheViewOrderModal from "../modal/TheViewOrderModal";
import TheCheckoutModal from "../modal/TheCheckoutModal";

function TheItems({ selectedTable }) {
  const [products, setProducts] = useState([]);
  const [viewOrderModalOpen, setViewOrderModalOpen] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const updatedProducts = response.data.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const incrementQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decrementQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleViewOrder = () => {
    const orderedProducts = products.filter((product) => product.quantity > 0);
    setOrderProducts(orderedProducts);
    setViewOrderModalOpen(true);
  };

  const handleCheckout = () => {
    const orderedProducts = products.filter((product) => product.quantity > 0);
    setOrderProducts(orderedProducts);
    setCheckoutModalOpen(true);
  };

  const handleViewOrderModalClose = () => {
    setViewOrderModalOpen(false);
  };

  const handleCheckoutModalClose = () => {
    setCheckoutModalOpen(false);
  };

  return (
    <div>
      <div className="-mt-5 h-[80vh] p-2 px-3 flex flex-col justify-between relative">
        <div className="h-[78vh] custom-scroll p-4 hidden lg:block md:block">
          <div className="flex flex-wrap gap-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="border w-[220px] text-xs rounded hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
              >
                <div className="border-b h-[25vh] mb-2 p-1 pointer-events-none">
                  <TheImageMagnifier
                    imageUrl={`data:image/jpeg;base64,${product.image}`}
                  />
                </div>
                <div className="mb-2 flex flex-col gap-2 p-2">
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-gray-500">{product.description}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                  <p className="font-semibold">Rs.{product.price}</p>
                  <div className="border p-2 rounded-lg primary-border primary-color flex items-center gap-4">
                    <button
                      className="font-bold"
                      onClick={() => decrementQuantity(index)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="font-bold"
                      onClick={() => incrementQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-5 absolute right-9 -top-8">
            <button
              className=" hidden lg:block primary-color primary-background px-2 py-1 rounded-md hover:brightness-150"
              onClick={handleViewOrder}
            >
              View Order
            </button>
            <button
              className=" hidden lg:block primary-color primary-background rounded-md px-2 py-1 hover:brightness-150"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
          <div className="hidden lg:hidden md:block">
            <button
              className="absolute left-7 -top-8 primary-color primary-background px-2 py-1 rounded-md hover:brightness-150"
              onClick={handleViewOrder}
            >
              View Order
            </button>
            <button
              className="absolute right-[5.5rem] -top-8 primary-color primary-background rounded-md px-2 py-1 hover:brightness-150"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>

        <div className="h-[75vh] custom-scroll  p-7 lg:hidden md:hidden">
          <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="border w-[220px] text-xs rounded hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
              >
                <div className="border-b h-[25vh] mb-2 p-1 pointer-events-none">
                  <TheImageMagnifier
                    imageUrl={`data:image/jpeg;base64,${product.image}`}
                  />
                </div>
                <div className="mb-2 flex flex-col gap-2 p-2">
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-gray-500">{product.description}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                  <p className="font-semibold">Rs.{product.price}</p>
                  <div className="border p-2 rounded-lg primary-border primary-color flex items-center gap-4">
                    <button
                      className="font-bold"
                      onClick={() => decrementQuantity(index)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="font-bold"
                      onClick={() => incrementQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden md:hidden">
            <button
              className="absolute -bottom-2  primary-color primary-background px-2 py-1 rounded-md hover:brightness-150"
              onClick={handleViewOrder}
            >
              View Order
            </button>
            <button
              className="absolute -bottom-2  right-12 primary-color primary-background rounded-md px-2 py-1 hover:brightness-150"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {viewOrderModalOpen && (
        <TheViewOrderModal
          products={orderProducts}
          selectedTable={selectedTable}
          closeModal={handleViewOrderModalClose}
        />
      )}
      {checkoutModalOpen && (
        <TheCheckoutModal
          products={orderProducts}
          selectedTable={selectedTable}
          productId={orderProducts.map((product) => product.id)}
          closeModal={handleCheckoutModalClose}
        />
      )}
    </div>
  );
}

export default TheItems;
