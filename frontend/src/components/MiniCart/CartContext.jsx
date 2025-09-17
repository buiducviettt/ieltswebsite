import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem('authToken');

  async function enrichWithProductDetails(items) {
    return Promise.all(
      items
        .filter((item) => item.productId) // ✅ bỏ qua item lỗi
        .map(async (item) => {
          const res = await fetch(
            `https://680f31ad67c5abddd19432d4.mockapi.io/elearn/courses/${item.productId}`,
          );
          if (!res.ok) throw new Error('Không fetch được product');
          const product = await res.json();
          return { ...item, product };
        }),
    );
  }

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
          const itemsWithDetails = await enrichWithProductDetails(
            data.items || [],
          );
          setCartItems(itemsWithDetails);
        }
      } catch (err) {
        console.error('Lỗi khi load giỏ hàng:', err);
      }
    };
    fetchCart();
  }, [token]);
  // 2. Thêm sản phẩm
  const addToCart = async (productId) => {
    if (!token) return;
    // ✅ check trước trong state
    const alreadyInCart = cartItems.some(
      (item) => String(item.productId) === String(productId),
    );
    if (alreadyInCart) {
      console.warn('Sản phẩm đã có trong giỏ, không thêm nữa');
      return; // dừng luôn
    }
    try {
      const res = await fetch(`http://localhost:3000/cart/add/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        const data = await res.json();
        const itemsWithDetails = await enrichWithProductDetails(
          data.items || [],
        );
        setCartItems(itemsWithDetails);
      }
    } catch (err) {
      console.error('Lỗi khi thêm giỏ hàng:', err);
    }
  };
  // 3. Xóa sản phẩm
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
        const itemsWithDetails = await enrichWithProductDetails(
          data.items || [],
        );
        setCartItems(itemsWithDetails);
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
