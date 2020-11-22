import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css" // Necessary for react-bootstrap
import "./header.css"
import cat from "../images/favicon.png"

const Header = () => (
  <Navbar expand="lg" variant="dark">
    <Navbar.Brand as={Link} to="/">
      <img className="icon" src={cat} alt="" />
      WKhiro
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Link to="/blog" className="linkFormat">
            Blog
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/projects" className="linkFormat">
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/some" className="linkFormat">
            Some
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
