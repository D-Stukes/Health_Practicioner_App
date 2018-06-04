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

    this.handleDelete= this.handleDelete.bind(this);
  }


  // handleEdit(e) {
  //   e.preventDefault()
  //   this.props.onEdit(this.props.testimony.testimonial_id);
  // }

  handleDelete(e) {
    e.preventDefault()
    this.props.onDelete(this.props.testimony.testimonial_id);
  }

  render() {
      return (
              <TableRow>
               <TableRowColumn className="TRow" style={{width:6}}><Link to={`/testimonials/edit/${this.props.testimony.testimonial_id}`}>Edit</Link></TableRowColumn>
                <TableRowColumn className="TRow" style={{width:6}}><button onClick={this.handleDelete}>Delete</button></TableRowColumn>
                <TableRowColumn className="TRow" style={{width:10}}>{this.props.testimony.patient_fname}</TableRowColumn>
                <TableRowColumn className="TRow" style={{width:10}}>{this.props.testimony.patient_lname}</TableRowColumn>
                <TableRowColumn className="TRow" style={{width:225, whiteSpace:"normal", wordWrap: "break-word"}}>{this.props.testimony.testimonial}</TableRowColumn>
                <TableRowColumn className="TRow" style={{width:25}}>{this.props.testimony.service_date}</TableRowColumn>
                <TableRowColumn className="TRow" style={{width:25}}>{this.props.testimony.doc_fname}</TableRowColumn>
                <TableRowColumn className="TRow" style={{width:25}}>{this.props.testimony.doc_lname}</TableRowColumn>
              </TableRow>
      )
    }
}

export default Testimony
// style={{
//                       whiteSpace: "normal",
//                       wordWrap: "break-word"
//                     }}

