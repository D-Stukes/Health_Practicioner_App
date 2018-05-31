import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className= "Navbar">
            <div className= "NavbarLink"><Link to="/">Home</Link></div>
            <div className= "NavbarLink"><Link to="/testimonials">Testimonials</Link></div>
            <div className= "NavbarLink"><Link to="/docinfo/">Physician Information and Medical Services</Link></div>
        </nav>
      </div>
    );
  };
}

export default Nav;
