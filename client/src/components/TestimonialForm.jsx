import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

//set initial state for values on Testimonial Form

class TestimonialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimony:{
      patient_fname: '',
      patient_lname: '',
      testimonial: '',
      service_date: '',
      doc_id: ''},
      specialty:[],
      specialtyLoaded:false
    }

//bind these functions to the state of the component so they will work

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState((prevState) => {
      return {
      testimony: {
        ...prevState.testimony,
        [name]: value
      }
    }
    });
  }

  //call the createTestimonial function to add the entered values when the user clicks submit button

  handleSubmit(e) {
    this.createTestimonial(this.state.testimony);
  }

 //fetch all of the information of the doc info services table from the database

  fetchDocServices() {
    fetch('/docinfo')
    .then((resp) => {
        // console.log('test',resp);
        if(!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
    .then((respBody) => {
      this.setState({
        specialty: respBody.data,
        specialtyLoaded: true
      })
    })
  }

  //make the fetched database info available as soon as the component mounts

  componentDidMount() {
    console.log('test this componentdidmount');
    this.fetchDocServices();
  }


  //create the testimonial using a fetch call to connect to the back end create model

  createTestimonial(testimony) {
    fetch('/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimony),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(resBody => {
      this.setState((prevState, props) => {
        return {
          testimonials: prevState.testimonials.concat(resBody.data)
        }
      })
    })
  }


  //display the blank form where a user can enter information and add a testimonial

  render(){
    return(

      <div className="addForm">

      <form onSubmit={this.handleSubmit}>
      <h1>Add a Testimonial</h1> <br/>
      <p>Share your positive experience with Doctor Nora!</p><br/>
      <h5>Select the specialty service you received, enter your information and enter your review.</h5><br/><br/>

      <label htmlFor="doc_id"> Select Service/ Name of Physician: </label>
      <select value = {this.state.doc_id}
              onChange = {this.handleChange}
              name = "doc_id">
        {this.state.specialty.map(specialty =>(
              <option value = {specialty.id}> {specialty.specialty} - {specialty.doc_fname} {specialty.doc_lname}  </option>
        ))}
      </select>  <br/><br/>

      <label htmlFor="patient_fname"> Patient First Name: </label>
      <input type="text" value={this.state.patient_fname} name="patient_fname" onChange={this.handleChange}></input>  <br/><br/>

      <label htmlFor="patient_lname"> Patient Last Name: </label>
      <input type="text" value={this.state.patient_lname} name="patient_lname" onChange={this.handleChange}></input>  <br/><br/>

      <label htmlFor="testimonial"> Testimonial: </label>
      <input type="text area" value={this.state.testimonial} name="testimonial" onChange={this.handleChange}></input>  <br/><br/>

      <label htmlFor="service_date"> Service Date</label>
      <input type="date" value={this.state.service_date} name="service_date" onChange={this.handleChange}></input>  <br/><br/>


      <button value="Submit">Submit</button>
      </form>
      </div>

      )
  }
}

export default TestimonialForm


// Intended to add to testimonialForm to create a drop down list of specialties
// but there is no specialty id or separate specialty table

