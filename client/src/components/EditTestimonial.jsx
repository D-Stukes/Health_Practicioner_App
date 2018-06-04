import React, { Component } from 'react';

//set state for the testimonial table values

export default class EditTestimonial extends Component {
   constructor(props) {
    super(props);
    this.state = {
      testimonials:{
      patient_fname: '',
      patient_lname: '',
      testimonial: '',
      service_date: '',
      doc_id: ''}
    }

  // bind these functions so they will work

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState( (prevState) =>{
      return{
        testimonials:{
          ...prevState.testimonials,
             [name]:value
        }
      }
    });
  }

  //setup handleSubmit to call the updateTestimonial function on only the id that matches user selection

  handleSubmit(e) {
    e.preventDefault()
    this.updateTestimonial(this.state.testimonials,this.props.match.params.id);
  }

  //perform an update on the data set that was selected based on user input

  updateTestimonial(testimony,id) {
    fetch(`/testimonials/${id}`, {
      method: 'PUT',
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
        this.fetchTestimonials();
        this.props.history.push('/testimonials');
      })
  }


  //fetch the database information only for the data set that was selected

  fetchTestimonial() {
      fetch(`/testimonials/${this.props.match.params.id}`)
      .then((resp) => {
        // console.log('test',resp);
        if(!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then((respBody) => {
        this.setState({
          testimonials: respBody.data,
          testimonialsLoaded: true
        })
      // console.log(this.state)
      })
    }


 //fetch the all of the database information for the testimonial table

 fetchTestimonials() {
    fetch('/testimonials')
    .then((resp) => {
      // console.log('test',resp);
      if(!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then((respBody) => {
      console.log('respbody print',respBody);
      this.setState({
        testimonials: respBody.data,
        testimonialsLoaded: true
      })
    // console.log(this.state)
    })
  }

  //make the information for the selected dataset available as soon as the component mounts
  componentDidMount() {
    console.log('test this componentdidmount');
    this.fetchTestimonial();
  }

  //display the information from the row where the user selected "Edit" in the Testimonials table

  render() {
    console.log('this prop test',this.props);
    return (
      <div className="editForm">
        <h1>Edit Testimonial</h1> <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="patient_fname"> Patient First Name: </label>
          <input type="text" value={this.state.testimonials.patient_fname} name="patient_fname" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="patient_lname"> Patient Last Name: </label>
          <input type="text" value={this.state.testimonials.patient_lname} name="patient_lname" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="testimonial"> Testimonial: </label>
          <input type="text area" value={this.state.testimonials.testimonial} name="testimonial" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="patient_fname"> Patient First Name: </label>
          <input type="date" value={this.state.testimonials.service_date} name="service_date" onChange={this.handleChange}></input>  <br/>

          <label htmlFor="doc_id"> Select Name of Physician: </label>
          <input type="doc_id" value={this.state.testimonials.doc_id} name="doc_id" onChange={this.handleChange}></input>  <br/>

          <button value="Submit">Submit</button>
       </form>
      </div>
    )
  }
}
