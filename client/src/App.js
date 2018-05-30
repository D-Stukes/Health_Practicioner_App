import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Testimonials from './components/Testimonials'
import TestimonialForm from './components/TestimonialForm.jsx';
import DocInfoTable from './components/DocInfoTable.jsx';


class App extends Component {
constructor(props) {
super(props);
this.state = {
  patient_fname: '',
  patient_lname:'',
  testimonial:'',
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
        // if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(resBody => {
        this.setState({
          testimonial: resBody.data
        })
      });
  }

  componentDidMount() {
    this.fetchTestimonials();
  }



// fetchDocinfo () {
//     fetch('/docinfo')
//       .then(resp => {
//         if (!resp.ok) throw new Error(resp.statusMessage);
//         return resp.json();
//       })
//       .then(resBody => {
//         this.setState({
//           docinfo: resBody.data
//         })
//       });
//   }

  // componentDidMount() {
  //   this.fetchDocinfo();
  // }


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
