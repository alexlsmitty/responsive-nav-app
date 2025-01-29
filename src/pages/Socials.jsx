import React from 'react';

const Socials = () => {
    return (
      <div className="container mx-auto text-center pt-28 px-4">
        <h1 className="text-4xl font-bold">Socials Page</h1>
        <p className="text-gray-600 mt-4">Connect with us on social media!</p>
        <ul className="mt-6 space-y-4">
          <li><a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    );
  };

export default Socials;