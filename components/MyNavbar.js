import React from "react";
import Header from "./Header";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Link from 'next/link';
const MyNavbar = () => {
  return (
    <>
      <Header />
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            Project Assignment
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
