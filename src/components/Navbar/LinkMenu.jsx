import React from "react";
import { Link, useLocation } from 'react-router-dom';

const LinkMenu = ({ setLinkMenuOpen }) => {
  const location = useLocation();

  const links = [
    { name: "Home", href: "/", icon: "home" },
    { name: "About", href: "/about", icon: "info" },
    { name: "Shop", href: "/shop", icon: "shopping_bag" },
    { name: "Cart", href: "/cart", icon: "shopping_cart" },
    { name: "Gallery", href: "/gallery", icon: "photo_library" },
    { name: "Contact", href: "/contact", icon: "mail" },
    { name: "Commission", href: "/commission", icon: "palette" },
  ];

  return (
    <div className="bg-yellow-300 py-2">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={`flex items-center mx-4 px-4 py-2 rounded-full transition-all duration-200 
                         shadow-sm hover:shadow-lg transform hover:scale-102
                         ${location.pathname === link.href 
                           ? 'bg-yellow-400 text-gray-800' 
                           : 'bg-yellow-300 hover:bg-yellow-400 text-gray-700'}`}
              onClick={() => setLinkMenuOpen(false)}
            >
              <span className="material-icons mr-3">
                {link.icon}
              </span>
              <span className="font-medium">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkMenu;
