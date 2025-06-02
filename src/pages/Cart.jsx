import { useEffect, useState } from 'react';
import {
  getCart,
  removeFromCart,
  clearCart,
  getCartTotal
} from '../ultils/cartUtils';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


export default function Cart({ setCartCount }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    const updatedCart = getCart();
    setCartItems(updatedCart);
    setCartCount(updatedCart.length);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: 'Producto eliminado del carrito',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const handleClear = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará todos los productos del carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        setCartItems([]);
        setCartCount(0);

        Swal.fire({
          icon: 'success',
          title: 'Carrito vaciado',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: 'top-end',
        });
      }
    });
  };


  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Tu carrito</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-4">No hay productos en el carrito.</p>
          <Link to="/" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Volver a comprar
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Quitar
              </button>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">
              Total: ${getCartTotal().toFixed(2)}
            </p>
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
