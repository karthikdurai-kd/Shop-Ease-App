"use client"; // To indicate that this page uses client side rendering. By default NextJS uses Server Side Rendering. In we use hooks liks "useState", button onlick events it should come in Client Side Rendering
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link href="/" className="nav-link">
            ShopEase
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/routes/about" className="nav-link">
              About
            </Link>
            <Link href="/routes/services" className="nav-link">
              Services
            </Link>
            <Link href="/routes/products" className="nav-link">
              Products
            </Link>
            <Link href="/routes/topDeals" className="nav-link">
              Top-Deals
            </Link>
            <Link href="/routes/quotes" className="nav-link">
              Quotes
            </Link>
            <Link href="/routes/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
