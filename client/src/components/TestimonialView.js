import React, { Component } from 'react';
import Testimonials from './components/Testimonials.jsx';

class TestimonialView extends Component {
  render() {


    return (
      <div>

        <h1>List of Testimonials</h1>

        <h5>Our clients are welcome to share their positive healing experiences via our medical assistance. <br />
        Here, you may add testimonials as well as edit or delete them.</h5>

        <Testimonials />

      </div>
    )
  }
}

export default TestimonialView;

