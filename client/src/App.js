import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';
import Footer from './components/footer/Footer';
import ContactForm from './components/contactForm/ContactForm';

import { validateEmail } from './utils/validation';
import './App.css';

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
    invalidEmailError: ''
  }

  toggleModal() {
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
        this.setState({invalidEmailError: 'Invalid Email'})
      }
    } else { // missing fields
      this.setState({
        errorText: 'this field is required', 
        invalidEmailError: ''
      }); 
    }
  }

  postSubmition() { 
    const { formValues } = this.state; 
    console.log(formValues); 
  }

  render() {
    const { modalOpen, formValues, errorText, invalidEmailError } = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header handleStartNow={this.toggleModal.bind(this)} />
          <Jumbotron />
          <Footer handleStartNow={this.toggleModal.bind(this)} />
          <Dialog
            open={modalOpen}
            onRequestClose={this.toggleModal.bind(this)}
            contentStyle={{ width: '30%' }}
          >
            <ContactForm
              values={formValues}
              errorText={errorText}
              invalidEmailError={invalidEmailError}
              onValueChange={this.handleInputChange.bind(this)}
              onSubmit={this.handleFormSubmit.bind(this)}
            />
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
