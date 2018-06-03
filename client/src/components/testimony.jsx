import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import { Link } from 'react-router-dom';
import EditTestimonial from './EditTestimonial'

class Testimony extends Component {
  constructor(props) {
    super(props);

    this.state ={
      testimonials:{},
      testimonialsLoaded: false
    }
     // this.fetchTestimonials = this.fetchTestimonials.bind(this);
     // this.renderTestimonials= this.renderTestimonials.bind(this);
     // // this.deleteTestimonial= this.deleteTestimonial.bind(this);
     this.handleDelete= this.handleDelete.bind(this);
  }

  // fetchTestimonials() {
  //   fetch('/testimonials')
  //   .then((resp) => {
  //     // console.log('test',resp);
  //     if(!resp.ok) throw new Error(resp.statusMessage);
  //     return resp.json();
  //   })
  //   .then((respBody) => {
  //     this.setState({
  //       testimonials: respBody.data,
  //       testimonialsLoaded: true
  //     })
  //   // console.log(this.state)
  //   })
  // }

// already in the Testimonials component
 // deleteTestimonial(id) {
 //  console.log(id);
 //  console.log('this is the delete fetch call');
 //    fetch(`/testimonials/${id}`, {
 //      method: 'DELETE'
 //      // body: JSON.stringify(id),
 //    })
 //      .then(resp => {
 //        if (!resp.ok) throw new Error(resp.statusMessage);
 //        return resp.json();
 //      })
 //      .then(respBody => {
 //        this.setState((prevState, props) => {
 //          return {
 //            testimonials: prevState.testimonials.filter(testimonials => testimonials.id !==id)
 //          }
 //          console.log("test state", this.state);
 //        })
 //      })
 //  }


  handleDelete(e) {
    e.preventDefault()
    this.props.onDelete(this.props.testimony.testimonial_id);
  }

  render() {
      return (
              <TableRow>
                <TableRowColumn className="TRow"><Link to='/testimonials/edit'>Edit</Link></TableRowColumn>
                <TableRowColumn className="TRow"><button onClick={this.handleDelete}>Delete</button></TableRowColumn>
                <TableRowColumn className="TRow">{this.props.testimony.patient_fname}</TableRowColumn>
                <TableRowColumn className="TRow">{this.props.testimony.patient_lname}</TableRowColumn>
                <TableRowColumn className="TRow">{this.props.testimony.testimonial}</TableRowColumn>
                <TableRowColumn className="TRow">{this.props.testimony.service_date}</TableRowColumn>
                <TableRowColumn className="TRow">{this.props.testimony.doc_fname}</TableRowColumn>
                <TableRowColumn className="TRow">{this.props.testimony.doc_lname}</TableRowColumn>
              </TableRow>
      )
    }
}

export default Testimony

// Intended for table to provide link to EditTestimonials component
// <TableRowColumn><button type='submit'>{'EditTestimonials'} Edit</button></TableRowColumn>
   // fetch(`/testimonials/${id}

