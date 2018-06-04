import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import { Link } from 'react-router-dom';
import EditTestimonial from './EditTestimonial'
import Testimony from './testimony';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state ={
      testimonials:[],
      testimonialsLoaded: false
    }
     this.fetchTestimonials = this.fetchTestimonials.bind(this);
     this.renderTestimonials= this.renderTestimonials.bind(this);
     // this.deleteTestimonial= this.deleteTestimonial.bind(this);
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
      console.log('respbody print',respBody);
      this.setState({
        testimonials: respBody.data,
        testimonialsLoaded: true
      })
    // console.log(this.state)
    })
  }

 deleteTestimonial(id) {
  console.log(id);
  console.log('this is the delete fetch call');
    fetch(`/testimonials/${id}`, {
      method: 'DELETE'
      // body: JSON.stringify(id),
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(respBody => {
        this.setState((prevState, props) => {
          return {
            testimonials: prevState.testimonials.filter(testimonials => testimonials.testimonial_id !==id)
          }
          console.log("test state", this.state);
        })
      })
  }

    handleSubmit(e) {
    this.createTestimonial(this.state.testimony);
  }


  handleDelete(id) {
    this.deleteTestimonial(id);
  }

  componentDidMount() {
    // console.log('test this componentdidmount');
    this.fetchTestimonials();
  }
  renderTestimonials() {
  if(this.state.testimonialsLoaded) {
    // {console.log('map statement for table',this.state.testimonials)}
    return (this.state.testimonials.map((testimony) => {
      return (
       <Testimony key={testimony.testimonial_id} onDelete={this.handleDelete} testimony={testimony} />
      )
    }))

      } else {

      return (<h2>* Loading * </h2>)
    }
  }

  render() {
      return (
        <div className="testimonialTable">
          <h1 className="title">Testimonials</h1>
          <h4 className="tableSubHdg">Positive Reviews from Satisfied Clients</h4>
          <h6 className="bannertext">"She is the best family doctor I have ever had."   "I would definitely recommend her."   "Everyone in this clinic is so attentative, patient and kind."   "All of the doctors and staff that work in this clinic are awesome."</h6>
          <MuiThemeProvider>
            <Table displayRowCheckbox={false}>
              <TableHeader displaySelectAll={false}  adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn style={{width:6}}>Edit Testimony</TableHeaderColumn>
                  <TableHeaderColumn style={{width:6}}>Delete Testimony</TableHeaderColumn>
                  <TableHeaderColumn style={{width:6}}>First Name</TableHeaderColumn>
                  <TableHeaderColumn style={{width:6}}>Last Name</TableHeaderColumn>
                  <TableHeaderColumn style={{width:225}}>Testimonial</TableHeaderColumn>
                  <TableHeaderColumn style={{width:25}}>Service Date</TableHeaderColumn>
                  <TableHeaderColumn style={{width:25}}>Physician First Name</TableHeaderColumn>
                  <TableHeaderColumn style={{width:25}}>Physician Last Name</TableHeaderColumn>
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

     {/*<EditTestimonial key={testimony.testimonial_id} onEdit={this.handleEdit} testimony={testimony} /> */}


