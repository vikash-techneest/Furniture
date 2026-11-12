import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // localStorage se initial cart load
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("furnihome_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Har change pe localStorage me save
  useEffect(() => {
    localStorage.setItem("furnihome_cart", JSON.stringify(cart));
  }, [cart]);

  // Item add karo
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + (product.qty || 1) } : i
        );
      }
      return [...prev, { ...product, qty: product.qty || 1 }];
    });
  };

  // Item hatao
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  // Quantity badlo
  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  // Cart khaali karo
  const clearCart = () => setCart([]);

  // ⬇️⬇️⬇️ CALCULATIONS ⬇️⬇️⬇️
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 0;
    return sum + price * qty;
  }, 0);

  const totalItems = cart.reduce(
    (sum, item) => sum + (Number(item.qty) || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);