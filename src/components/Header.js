import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="sticky top-0 bg-white shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-xl font-bold text-primary">
        <img className="logo" src="/images/logo_b.png" alt="logo"/>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-primary transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
