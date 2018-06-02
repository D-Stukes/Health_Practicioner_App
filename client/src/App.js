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
  fetchTestimonials(){
      fetch('/testimonials')
        .then(resp => {
          console.log('from app',resp);
          if (!resp.ok) throw new Error(resp.statusMessage);
          return resp.json();
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
          <h1 className="App-title">Welcome to Your Health Practitioner's App</h1>
        </header>
          <Route exact path='/testimonials' render={() => (<Testimonials testimonials= {this.state.testimonials}/>)}/>
          <Route exact path='/testimonials/form' render={() =>(<TestimonialForm onSubmit={this.handleSubmit}/>)}/>
          <Route exact path='/testimonials/docinfo'render={() => (<DocInfoTable/>)}/>
          <Route exact path='/testimonials/edit' render={() => (<EditTestimonial/>)}/>
          <Route exact path='/' render={() => (<Home/>)}/>
      </div>
    </Route>
    )
  }
}

export default App;

          {/*<img src={logo} className="App-logo" alt="logo" />*/}

