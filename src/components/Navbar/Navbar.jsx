import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import LinkMenu from './LinkMenu';
import './Navbar.css';

const Navbar = () => {
  const [isLinkMenuOpen, setLinkMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setLinkMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuToggle = (event) => {
    event.stopPropagation();
    setLinkMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-yellow-300 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-26 px-4 py-2">
            <Logo />
            <button
              ref={buttonRef}
              className="mt-4 sm:mt-0 p-2 bg-yellow-300 hover:bg-yellow-400 
                         w-full sm:w-auto mx-4 sm:mx-0 
                         rounded-lg sm:rounded-full 
                         transition-all duration-200 focus:outline-none"
              onClick={handleMenuToggle}
            >
              <span className="material-icons text-gray-700">
                {isLinkMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isLinkMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <LinkMenu setLinkMenuOpen={setLinkMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;