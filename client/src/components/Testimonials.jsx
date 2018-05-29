import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody,
TableHeader, TableHeaderColumn,
TableRow, TableRowColumn} from 'material-ui/Table'


class Testimonials extends Component {
  constructor(props) {
  super(props);

  this.state ={
    patient_fname: '',
    patient_lname:'',
    testimonial:'',
    service_date:'',
    doc_id: ''
  }

}

  render(){
    return(
      <div>
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
              <TableHeaderColumn>Physician</TableHeaderColumn>
          </TableRow>
      </TableHeader>


      <TableBody>
        <TableRow>
          <TableRowColumn>${this.props.patient_fname}</TableRowColumn>
          <TableRowColumn> ${this.props.patient_lname}</TableRowColumn>
          <TableRowColumn> ${this.props.testimonial}</TableRowColumn>
          <TableRowColumn> ${this.props.service_date}</TableRowColumn>
          <TableRowColumn> ${this.props.doc_id}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    </div>
    )
  }
}

export default Testimonials
