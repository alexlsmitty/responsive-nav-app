import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import artistName from '../../assets/artistname.png';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="h-24 w-auto" />
      <img src={artistName} alt="Artist Name" className="h-12 w-auto" />
    </Link>
  );
};

export default Logo;
