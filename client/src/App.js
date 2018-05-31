import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link } from 'react-router-dom';
import Testimonials from './components/Testimonials'
import TestimonialForm from './components/TestimonialForm.jsx';
import DocInfoTable from './components/DocInfoTable.jsx';
import Nav from './components/Nav.jsx'


class App extends Component {
constructor(props) {
super(props);
this.state = {
  patient_fname: '',
  patient_lname:'',
  testimonials:[],
  service_date:'',
  doc_fname: '',
  doc_lname:'',
  specialty:'',
  insurance:'',
  affiliations: '',
  board_certs:''
}
}

fetchTestimonials(){
    fetch('/testimonials')
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
        console.log(resp.json);
      })
      .then(resBody => {
        this.setState({
          testimonials: resBody.data
        })
      });
  }

  componentDidMount() {
    this.fetchTestimonials();
  }

  render() {
    return (
      <Route>
      <div className="App">
        <header className="App-header">
        <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your Health Practitioner's App</h1>
        </header>
          <Route exact path='/testimonials' render={() => (<Testimonials/>)}/>
          <Route exact path='/testimonials/form' render={() =>(<TestimonialForm onSubmit={this.handleSubmit}/>)}/>
          <Route exact path='/docinfo'render={() => (<DocInfoTable/>)}/>
      </div>
    </Route>
    )
  }
}

export default App;
