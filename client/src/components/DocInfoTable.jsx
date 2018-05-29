import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody,
TableHeader, TableHeaderColumn,
TableRow, TableRowColumn} from 'material-ui/Table'

class DocInfoTable extends Component {
  constructor(props) {
  super(props);

    this.state ={
      doc_fname: '',
      doc_lname:'',
      specialty:'',
      insurance:'',
      affiliations: '',
      board_certs: ''
    }

}

    render(){

      return(
      <div>
     <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Doctor and Service Information</TableHeaderColumn>
          </TableRow>

          <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
            <TableHeaderColumn>Specialty</TableHeaderColumn>
            <TableHeaderColumn>Accepted Insurances</TableHeaderColumn>
            <TableHeaderColumn>Affiliations</TableHeaderColumn>
            <TableHeaderColumn>Affiliations</TableHeaderColumn>
            <TableHeaderColumn>Board Certifications</TableHeaderColumn>
            <TableHeaderColumn>Physician Services ID</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableRowColumn>${this.props.doc_fname}</TableRowColumn>
            <TableRowColumn> ${this.props.doc_lname}</TableRowColumn>
            <TableRowColumn> ${this.props.specialty}</TableRowColumn>
            <TableRowColumn> ${this.props.affiliations}</TableRowColumn>
            <TableRowColumn> ${this.props.this.board_certs}</TableRowColumn>
            <TableRowColumn> ${this.props.this.docservices_id}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    )

  }
}

export default DocInfoTable

