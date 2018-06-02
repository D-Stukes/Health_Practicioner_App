import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import { Link } from 'react-router-dom';
import EditTestimonial from './EditTestimonial'

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state ={
      testimonials:{},
      testimonialsLoaded: false
    }
     this.fetchTestimonials = this.fetchTestimonials.bind(this);
     this.renderTestimonials= this.renderTestimonials.bind(this);
     this.handleDelete= this.handleDelete.bind(this);

  }

  fetchTestimonials() {
    fetch('/testimonials')
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

 deleteTestimonial(id) {
    fetch(`/testimonials/${id}`, {
      method: 'DELETE'
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(respBody => {
        this.setState((prevState, props) => {
          return {
            quotes: prevState.quotes.filter(quote => quote.id !== id)
          }
        })
      })
  }

  handleDelete(id) {
    this.deleteTestimonial(id);
  }

  componentDidMount() {
    console.log('test this componentdidmount');
    this.fetchTestimonials();
  }
  renderTestimonials() {
  if(this.state.testimonialsLoaded) {
    return (this.state.testimonials.map((testimony) => {
      return (
       <div>
              <TableRow>
                <TableRowColumn className="TRow"><Link to='/testimonials/edit'>Edit</Link></TableRowColumn>
                <TableRowColumn className="TRow">{testimony.patient_fname}</TableRowColumn>
                <TableRowColumn className="TRow">{testimony.patient_lname}</TableRowColumn>
                <TableRowColumn className="TRow">{testimony.testimonial}</TableRowColumn>
                <TableRowColumn className="TRow">{testimony.service_date}</TableRowColumn>
                <TableRowColumn className="TRow">{testimony.doc_fname}</TableRowColumn>
                <TableRowColumn className="TRow">{testimony.doc_lname}</TableRowColumn>
              </TableRow>
          </div>
      )
    }))

      } else {

      return (<h2>* Loading * </h2>)
    }
  }

  render() {
      return (
        <div className ="testimonial-table">
          <h1 className ="title">Testimonials</h1>
          <MuiThemeProvider>
            <Table>
              <TableHeader>
                <TableHeaderColumn className="THeader">Positive Reviews from Satisfied Clients</TableHeaderColumn>
                <TableRow>
                   <TableHeaderColumn>Edit Testimony</TableHeaderColumn>
                   <TableHeaderColumn>First Name</TableHeaderColumn>
                   <TableHeaderColumn>Last Name</TableHeaderColumn>
                   <TableHeaderColumn>Testimonial</TableHeaderColumn>
                   <TableHeaderColumn>Service Date</TableHeaderColumn>
                   <TableHeaderColumn>Physician First Name</TableHeaderColumn>
                   <TableHeaderColumn>Physician Last Name</TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody>
                  { this.renderTestimonials() }
              </TableBody>
            </Table>
          </MuiThemeProvider>
        </div>
      )
    }
}

export default Testimonials

// Intended for table to provide link to EditTestimonials component
// <TableRowColumn><button type='submit'>{'EditTestimonials'} Edit</button></TableRowColumn>


