import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'


class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state ={
      testimonials:{},
      testimonialsLoaded: false
    }
     this.fetchTestimonials = this.fetchTestimonials.bind(this);
     this.renderTestimonials= this.renderTestimonials.bind(this);

  }

  fetchTestimonials() {
    fetch('/testimonials')
    .then((resp) => {
      console.log('test',resp);
      if(!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then((respBody) => {
      this.setState({
        testimonials: respBody.data,
        testimonialsLoaded: true
      })
console.log(this.state)
    })
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
          <MuiThemeProvider>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Testimonials from Satisfied Clients</TableHeaderColumn>
                  </TableRow>

                  <TableRow>
                      <TableHeaderColumn>First Name</TableHeaderColumn>
                      <TableHeaderColumn>Last Name</TableHeaderColumn>
                      <TableHeaderColumn>Testimonial</TableHeaderColumn>
                      <TableHeaderColumn>Service Date</TableHeaderColumn>
                      <TableHeaderColumn>Physician First Name</TableHeaderColumn>
                      <TableHeaderColumn>Physician Last Name</TableHeaderColumn>

                  </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableRowColumn>{testimony.patient_fname}</TableRowColumn>
                  <TableRowColumn>{testimony.patient_lname}</TableRowColumn>
                  <TableRowColumn>{testimony.testimonial}</TableRowColumn>
                  <TableRowColumn>{testimony.service_date}</TableRowColumn>
                  <TableRowColumn>{testimony.doc_fname}</TableRowColumn>
                  <TableRowColumn>{testimony.doc_lname}</TableRowColumn>

                </TableRow>
              </TableBody>
             </Table>
            </MuiThemeProvider>
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
            { this.renderTestimonials() }
        </div>
      )
    }
}

export default Testimonials



//previously in render statement
    // return(
    //   <div>
    //   <Table>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHeaderColumn>Testimonials from Satisfied Clients</TableHeaderColumn>
    //       </TableRow>

    //       <TableRow>
    //           <TableHeaderColumn>First Name</TableHeaderColumn>
    //           <TableHeaderColumn>Last Name</TableHeaderColumn>
    //           <TableHeaderColumn>Testimonial</TableHeaderColumn>
    //           <TableHeaderColumn>Service Date</TableHeaderColumn>
    //           <TableHeaderColumn>Physician</TableHeaderColumn>
    //       </TableRow>
    //   </TableHeader>

    //   <TableBody>
    //     <TableRow>
    //       <TableRowColumn>${this.props.testimonials.patient_fname}</TableRowColumn>
    //       <TableRowColumn> ${this.props.testimonials.patient_lname}</TableRowColumn>
    //       <TableRowColumn> ${this.props.testimonials.testimonial}</TableRowColumn>
    //       <TableRowColumn> ${this.props.testimonials.service_date}</TableRowColumn>
    //     </TableRow>
    //   </TableBody>
    // </Table>
    // </div>
    // )
