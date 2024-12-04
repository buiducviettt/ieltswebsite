import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
// Tạo CartContext
export const CartContext = createContext();

// CartProvider sẽ cung cấp context cho các component con
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  }); // Giỏ hàng ban đầu

  // Thêm sản phẩm vào giỏ hàng (mỗi khóa học chỉ được có 1 trong giỏ hàng)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Nếu có rồi, không thay đổi giỏ hàng
        return prevItems;
      } else {
        // Nếu chưa có, thêm sản phẩm vào giỏ hàng với số lượng là 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Tính tổng số sản phẩm trong giỏ hàng
  const totalItems = cartItems.length;
  // tính tổng giá trị đơn hàng
  const totalPrice =
    cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0, // Giá trị ban đầu
    ) * 24000;
  const formatPrice = totalPrice.toLocaleString('vi-VN');

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        formatPrice,
        addToCart,
        removeCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook để dễ dàng sử dụng CartContext trong các component
export const useCart = () => useContext(CartContext);
