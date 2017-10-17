import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import {required, expirationDate, cvvNumber} from '../../utils/validators';
import './billingForm.css';

export const BillingForm = ({submitForm}) => {
  return ( 
    <Form className="billing-form" onSubmit={submitForm}>
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
      <Button className="submit">Continue to review</Button>        
    </Form>
  );
}