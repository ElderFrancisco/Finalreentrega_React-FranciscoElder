import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    console.log(cart);
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeItem,
        addItem,
        totalPrice,
        totalItems,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
