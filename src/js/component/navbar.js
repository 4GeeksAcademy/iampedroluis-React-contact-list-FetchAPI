import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return <>
	<nav className="navbar bg-body-tertiary d-flex justify-content-center">
  <div className="container d-flex justify-between m-0 ">
	<Link to={'/'}><h2>Contact List Fecth API</h2></Link>
  </div>
</nav>
  </>;
};
