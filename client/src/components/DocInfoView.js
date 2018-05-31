import React, { Component } from 'react';
import DocinfoTable from './components/DocinfoTable.jsx';

class DocInfoView extends Component {
  render() {


    return (
      <div>

        <h1>Physician Information and Medical Services</h1>

        <DocinfoTable />

      </div>
    )
  }
}

export default DocInfoView;

