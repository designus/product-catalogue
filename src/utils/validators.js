import React from 'react';

export const required = (value) => {
  const isEmpty = Boolean(value.toString().trim().length)
  if (!isEmpty) {
    return (
      <div className="validation-error">Field is required</div>
    );
  }
};

export const expirationDate = (value) => {
  const formattedValue = value.toString().trim();
  const arr = formattedValue.split('/');
  const [month, year] = arr;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  
  const isSameYear = year === currentYear;
  const isYearValid = year && year >= currentYear;
  const isMonthValid = month && month <= 12 && (isSameYear ? month > currentMonth : month >= 1)

  if (!isYearValid || !isMonthValid) {
    return (
      <div className="validation-error">
        Value is not valid or does not follow MM/YYYY format
      </div>
    )
  }
}

export const cvvNumber = (value) => {
  const formattedValue = value.toString().trim(); 
  const numericValue = parseInt(formattedValue, 10);
  
  if (isNaN(numericValue)) {
    return (
      <div className="validation-error">
        CVV value should be a number
      </div>
    )
  } else if (numericValue > 999 || numericValue < 100 || formattedValue.length !== 3) {
    return (
      <div className="validation-error">
        CVV value should have exactly 3 numbers
      </div>
    )
  } 
};