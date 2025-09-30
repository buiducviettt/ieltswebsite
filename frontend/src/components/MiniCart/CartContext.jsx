import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem('authToken');

  // 1. Lấy giỏ hàng khi load trang
  useEffect(() => {
    const fetchCart = async () => {
      if (!token) return;
      try {
        const res = await fetch('http://localhost:3000/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setCartItems(data.items || []); // ✅ dùng thẳng product từ BE
        }
      } catch (err) {
        console.error('Lỗi khi load giỏ hàng:', err);
      }
    };
    fetchCart();
  }, [token]);

  // 2. Thêm sản phẩm vào giỏ
  const addToCart = async (productId) => {
    if (!token) return;

    // Check có trong giỏ chưa
    const alreadyInCart = cartItems.some(
      (item) => item.productId === productId,
    );
    if (alreadyInCart) {
      console.warn('Sản phẩm đã có trong giỏ, không thêm nữa');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/cart/add/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setCartItems(data.items || []); // ✅ items đã có product
      }
    } catch (err) {
      console.error('Lỗi khi thêm giỏ hàng:', err);
    }
  };

  // 3. Xóa sản phẩm khỏi giỏ
  const removeCart = async (productId) => {
    if (!token) return;
    try {
      const res = await fetch(
        `http://localhost:3000/cart/remove/${productId}`,
        {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (res.ok) {
        const data = await res.json();
        setCartItems(data.items || []); // ✅ items đã có product
      }
    } catch (err) {
      console.error('Lỗi khi xóa giỏ hàng:', err);
    }
  };

  // 4. Tính tổng
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.product?.price || 0) * item.quantity,
    0,
  );
  const formatPrice = (totalPrice * 24000).toLocaleString('vi-VN');

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeCart,
        totalItems,
        totalPrice,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
