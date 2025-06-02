export default function ProductCard({ image, title, price, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-[1.02] transition flex flex-col justify-between">
      <img
        src={image}
        alt={title}
        className="h-40 object-contain mb-4 mx-auto"
      />
      <h2 className="text-sm font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-blue-600 font-bold text-lg mb-4">${price.toFixed(2)}</p>
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Agregar al carrito 🛒
      </button>
    </div>
  );
}
