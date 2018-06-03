import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

// const formPic = {
//   backgroundImage: 'url("../assets/Project4Bkg-main.png")',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// }


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

  handleSubmit(e) {
    this.createTestimonial(this.state.testimony);
  }


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
      // console.log(this.state)
    })
  }

  componentDidMount() {
    console.log('test this componentdidmount');
    this.fetchDocServices();
    {/*document.body.style.background= 'aqua';*/}
    // document.body.style= {formPic};
  }

  createTestimonial(testimony) {
    console.log(testimony);
        debugger;

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

