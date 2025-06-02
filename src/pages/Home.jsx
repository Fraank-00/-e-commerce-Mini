import { addToCart, getCartCount } from '../ultils/cartUtils';
import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import Swal from 'sweetalert2';


export default function Home({ setCartCount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartCount(getCartCount()); 

     Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: `"${product.title}" agregado al carrito`,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    });
    
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
}
