import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {required, expirationDate, cvvNumber} from '../../utils/validators';
import './billingForm.css';

export class BillingForm extends Component {

  submitForm = (e) => {
    e.preventDefault();
    this.form.validateAll();
    const formState = this.form.state.byId;
    const fieldKeys = Object.keys(formState);
    const isFormValid = fieldKeys.every(key => !formState[key].error);

    if (isFormValid) {
      this.props.placeOrder();
    }
  }

  render() {
    return ( 
      <Form ref={c => { this.form = c }} className="billing-form" onSubmit={this.props.submitForm}>
        <h3>3. Billing</h3>
        <div className="form-row col-1">
          <Input 
            placeholder="Your credit card number"
            name='cardNumber'
            validations={[required]}
          />
        </div>
        <div className="form-row col-2">
          <Input 
            placeholder="Expiration date (MM/YYYY)"
            name='expirationDate'
            validations={[required, expirationDate]}
          />
          <Input 
            placeholder="CVV code"
            name='cvv'
            validations={[required, cvvNumber]}
          />
        </div>
        <button className="submit" onClick={this.submitForm}>Continue to review</button>        
      </Form>
    );
  }
}