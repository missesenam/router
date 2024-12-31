import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#f9a826",
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0 }}>MySite</h1>
      <div>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Home
        </Link>
        <Link
          to="/contact"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Contact
        </Link>
        <Link
          to="/about"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          About
        </Link>
        <Link
          to="/products"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
