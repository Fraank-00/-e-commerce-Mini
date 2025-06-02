// Obtener carrito desde localStorage
export const getCart = () => {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
};

// Guardar carrito actualizado
export const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Agregar un producto al carrito
export const addToCart = (product) => {
  const cart = getCart();
  cart.push(product); 
  saveCart(cart);
};

// Obtener cantidad total de productos
export const getCartCount = () => {
  const cart = getCart();
  return cart.length;
};

// Eliminar un producto por ID
export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
};

// Vaciar carrito
export const clearCart = () => {
  localStorage.removeItem('cart');
};

// Calcular total
export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price, 0);
};
