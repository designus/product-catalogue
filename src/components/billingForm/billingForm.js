import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import {required, expirationDate, cvvNumber} from '../../utils/validators';

export const BillingForm = ({submitForm}) => {
  return ( 
    <Form>
      <h3>3. Billing</h3>
      <div>
        <Input 
          placeholder="Your credit card number"
          name='cardNumber'
          validations={[required]}
        />
      </div>
      <div>
        <Input 
          placeholder="Expiration date (MM/YY)"
          name='expirationDate'
          validations={[required, expirationDate]}
        />
        <Input 
          placeholder="CVV code"
          name='cvv'
          validations={[required, cvvNumber]}
        />
      </div>
      <Button onClick={submitForm}>Continue to review</Button>        
    </Form>
  );
}