import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const count = prev[itemId] || 0;
      return { ...prev, [itemId]: count > 0 ? count - 1 : 0 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const product = food_list.find((p) => p._id === item);
        if (product) {
          totalAmount += product.price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
