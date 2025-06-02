import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Header({ cartCount }) {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <div >
                <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">ShoppOne</h1>
            </div>
            <Link to="/cart" className="relative cursor-pointer">
                <FiShoppingBag className="text-2xl text-gray-800" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                </span>
            </Link>

        </header>

    );
}

