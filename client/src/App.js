import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Link } from 'react-router-dom';
import Testimonials from './components/Testimonials'
import TestimonialForm from './components/TestimonialForm.jsx';
import DocInfoTable from './components/DocInfoTable.jsx';
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import EditTestimonial from './components/EditTestimonial.jsx'



class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        testimonials: {}
      }
  }

  //I decided to place fetch calls in the components.  I may later refactor this project to plact the fetch call here and better utilize the advantage of passing props from App. js

  render() {
    return (
      <Route>
      <div className="App">
        <header className="App-header">
        <Nav />

        </header>
          <Route exact path='/testimonials' render={() => (<Testimonials testimonials= {this.state.testimonials}/>)}/>
          <Route exact path='/testimonials/form' render={() =>(<TestimonialForm onSubmit={this.handleSubmit}/>)}/>
          <Route exact path='/testimonials/docinfo'render={() => (<DocInfoTable/>)}/>
          <Route exact path='/testimonials/edit/:id' render={({match,history}) => (<EditTestimonial match={match} history={history}/>)}/>
          <Route exact path='/' render={() => (<Home/>)}/>
      </div>
    </Route>
    )
  }
}

export default App;

          {/*<img src={logo} className="App-logo" alt="logo" />*/}

