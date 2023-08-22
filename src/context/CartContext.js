import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { item } = action.payload;
      const existingItemIndex = state.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase the quantity by 1
        const updatedCartItems = state.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return updatedCartItems;
      } else {
        // If the item does not exist in the cart, add it with a quantity of 1
        return [...state, { ...item, quantity: 1 }];
      }
    case "REMOVE_TO_CART":
      const { itemId } = action.payload;
      return state.filter((item) => item.id !== itemId);
    case "INCREMENT_QUANTITY":
      const { itemId: incItemId } = action.payload;
      const incUpdatedCartItems = state.map((item) =>
        item.id === incItemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      return incUpdatedCartItems;
    case "DECREMENT_QUANTITY":
      const { itemId: decItemId } = action.payload;
      const decUpdatedCartItems = state.map((item) =>
        item.id === decItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return decUpdatedCartItems;
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(CartReducer, [], () => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: { item } });
  };

  const removeToCart = (itemId) => {
    dispatch({ type: "REMOVE_TO_CART", payload: { itemId } });
  };

  const incrementQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { itemId } });
  };

  const decrementQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { itemId } });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeToCart,
        incrementQuantity,
        decrementQuantity,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
