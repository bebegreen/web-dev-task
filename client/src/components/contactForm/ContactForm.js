import React from 'react'; 
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { validateEmail } from '../../utils/validation';
import './contactForm.scss'

const ContactForm = ({
  values,
  onValueChange,
  onSubmit,
  errorText,
  invalidEmailError
}) => {
  const { firstName, lastName, email, timeFrame } = values; 
  return (
    <div className='contact-form'>
      <h1>Contact us!</h1>
      <TextField
        name='firstName'  
        value={firstName}
        onChange={onValueChange}
        errorText={firstName ? '' : errorText}
        floatingLabelText="First Name"
        floatingLabelStyle={{ color: '#ffcb05' }}
        underlineFocusStyle={{ borderColor: '#ffcb05' }}
      />
      <TextField
        name='lastName'  
        value={lastName}
        onChange={onValueChange}
        errorText={lastName ? '' : errorText}
        floatingLabelText="Last Name"
        floatingLabelStyle={{ color: '#ffcb05' }}
        underlineFocusStyle={{ borderColor: '#ffcb05' }}
      />
      <TextField
        name='email'
        value={email}  
        onChange={onValueChange}
        errorText={email ? invalidEmailError : errorText}        
        floatingLabelText="Email"
        floatingLabelStyle={{ color: '#ffcb05' }}
        underlineFocusStyle={{ borderColor: '#ffcb05' }}
      />
      <SelectField 
        value={timeFrame}
        errorText={timeFrame ? '' : errorText}        
        onChange={onValueChange}
        floatingLabelText="Timeframe"
        floatingLabelStyle={{ color: '#ffcb05' }}
        underlineFocusStyle={{ borderColor: '#ffcb05' }}
      >
        <MenuItem value={1} primaryText="Over 6 months" />
        <MenuItem value={2} primaryText="3-6 months" />
        <MenuItem value={3} primaryText="Less than 3 months" />
      </SelectField>
      <div className='get-started-btn' onClick={onSubmit}>
        Get Started!
      </div>
    </div>
  ); 
}; 

export default ContactForm;