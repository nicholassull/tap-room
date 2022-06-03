import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    let kegKey = v4();
    props.onNewKegCreation({name: event.target.name.value,
                            price: parseInt(event.target.price.value),
                            brand: event.target.brand.value,
                            flavor: event.target.flavor.value,
                            id: kegKey,
                            key: kegKey})
  }
  
  return ( 
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <textarea
          name='brand'
          placeholder='Brand' />
          <textarea
          name='flavor'
          placeholder='Flavor' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;