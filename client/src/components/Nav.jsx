import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/Home';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className= "Navbar">
            <div className= "NavbarLink"><Link to="/">Home</Link></div>
            <div className= "NavbarLink"><Link to="/testimonials">Testimonials</Link></div>
            <div className= "NavbarLink"><Link to="/testimonials/form">TestimonialForm</Link></div>
            <div className= "NavbarLink longnav"><Link to="/testimonials/docinfo">Physician Info & Medical Services</Link></div>
        </nav>
      </div>
    );
  };
}

export default Nav;
