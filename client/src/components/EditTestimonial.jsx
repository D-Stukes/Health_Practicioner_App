import React, { Component } from 'react';

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

  handleSubmit(e) {
    e.preventDefault()
    this.updateTestimonial(this.state.testimonials,this.props.match.params.id);
  }

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
        // this.setState((prevState, props) => {
        //   debugger;
        //   const { testimonials } = prevState;
        //   const index = prevState.testimonials.findIndex(t => t.id === id);
        //   return {
        //     testimonials: [
        //       testimonials.slice(0, index),
        //       resBody.data,
        //       testimonials.slice(index + 1)
        //     ]
        //   }
        // })
      })
  }


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

  componentDidMount() {
    console.log('test this componentdidmount');
    this.fetchTestimonial();
  }

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
