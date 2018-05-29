import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class TestimonialForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        patient_fname: '',
        patient_lname:'',
        testimonial:'',
        service_date:'',
        doc_id: ''
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]:e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.onSubmit);
    this.props.onSubmit(this.state);
    this.setState({
        patient_fname: '',
        patient_lname:'',
        testimonial:'',
        service_date:'',
        doc_id: ''
    })
  }

  render(){
    return(
      <div>
       (patient_fname, patient_lname, testimonial, service_date, doc_id)

        <form onSubmit={this.handleSubmit}>
          <h1>Add or Edit a Testimonial</h1>
          <label htmlFor="patientl_fname"> Patient First Name: </label>
          <input type="text" value={this.state.patient_fname} name="patient_fname" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="patientl_lname"> Patient Last Name: </label>
          <input type="text" value={this.state.patient_lname} name="patient-lname" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="testimonial"> Testimonial: </label>
          <input type="text area" value={this.state.testimonial} name="testimonial" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="patientl_fname"> Patient First Name: </label>
          <input type="date" value={this.state.service_date} name="service_date" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="doc_id"> Select Name of Physician: </label>
          <input type="doc_id" value={this.state.doc_id} name="doc_id" onChange={this.handleChange}></input>  <br/>

          <button value="Submit">Submit</button>
       </form>
      </div>

    )
  }
}

export default TestimonialForm
