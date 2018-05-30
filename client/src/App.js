import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Testimonials from './components/Testimonials'
import TestimonialForm from './components/TestimonialForm.jsx';
import DocInfoTable from './components/DocInfoTable.jsx';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your Health Practitioner's App</h1>
        </header>

          <Route exact path='/testimonials' render={() => (<Testimonials/>)}/>
          <Route exact path='/testimonials/form' render={() =>(<TestimonialForm onSubmit={this.handleSubmit}/>)}/>
          <Route exact path='/docinfo'render={() => (<DocInfoTable/>)}/>
      </div>
    </Router>
    )
  }
}

export default App;
