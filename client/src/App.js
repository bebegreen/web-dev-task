import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import ContactForm from './components/contactForm/ContactForm';
import AllSignups from './components/allSignups/AllSignups'; 

import { SERVER_URL } from './constants/constants';
import { validateEmail } from './utils/validation';
import './App.scss';

class App extends Component {
  state = {
    modalOpen: false,
    formValues: {
      firstName: '',
      lastName: '',
      email: '',
      timeFrame: ''
    },
    errorText: '',
    invalidEmailError: '',
    loading: false,
    success: false,
    error: false
  }

  toggleModal() {
    const { modalOpen } = this.state;
    if (modalOpen) {
      this.setState({
        success: false
      })
    }
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  handleInputChange(e, key, payload) {
    this.setState({ errorText: '' })
    const { formValues } = this.state;
    this.setState({
      formValues: {
        ...formValues,
        [payload ? 'timeFrame' : e.target.name]: payload || e.target.value
      },
    });
  }

  handleFormSubmit() {
    const { firstName, lastName, email, timeFrame } = this.state.formValues;
    if (firstName && lastName && email && timeFrame) { // all fields are filled
      if (validateEmail(email)) { // email is valid
        this.setState({ invalidEmailError: '' });
        this.postSubmition();
      } else { // invalid email
        this.setState({ invalidEmailError: 'Invalid Email' })
      }
    } else { // missing fields
      this.setState({
        errorText: 'this field is required',
        invalidEmailError: ''
      });
    }
  }

  async postSubmition() {
    const { formValues } = this.state;
    console.log(formValues);
    try {
      this.setState({ loading: true, error: false, success: false })
      const httpRes = await axios.post(SERVER_URL, formValues);
      this.setState({
        loading: false,
        success: true,
        formValues: {
          firstName: '',
          lastName: '',
          email: '',
          timeFrame: ''
        }
      });
    } catch (err) {
      this.setState({ loading: false, error: true })
    }
  }

  render() {
    const { modalOpen,
      formValues,
      errorText,
      invalidEmailError,
      loading,
      error,
      success
     } = this.state;
    return (
      <MuiThemeProvider>
        <Router>

          <div className="App">
            <Header handleStartNow={this.toggleModal.bind(this)} />
            <Jumbotron />
            <Route exact path="/" component={Content} />
            <Route path="/signups" component={AllSignups} />
            <Footer handleStartNow={this.toggleModal.bind(this)} />
            <Dialog
              open={modalOpen}
              onRequestClose={this.toggleModal.bind(this)}
              contentStyle={{ width: '30%' }}
              style={{ height: '50%' }}
            >
              {
                !loading && !success &&
                <ContactForm
                  values={formValues}
                  errorText={errorText}
                  invalidEmailError={invalidEmailError}
                  onValueChange={this.handleInputChange.bind(this)}
                  onSubmit={this.handleFormSubmit.bind(this)}
                />
              }

              {
                loading &&
                <div className='spinner'>
                  <BeatLoader />
                </div>
              }
              {
                error &&
                <h3>oops, seems like something went wrong. try enabling CORS in your browser.</h3>
              }
              {
                success &&
                <h1>thankyou! we'll contact you shortlly!</h1>
              }
            </Dialog>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
