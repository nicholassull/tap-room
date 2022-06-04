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
                            pintsRemaining: 124,
                            id: kegKey,
                            key: kegKey})
  }
  
  return ( 
    <React.Fragment>
      <form className="form text-center mx-5 my-3" onSubmit={handleNewKegFormSubmission}>
        <div className="form-group">
          <input
            className="form-control"
            type='text'
            name='name'
            placeholder='Name' />
        </div>
        <div className="form-group">
        <input
          className="form-control"
          type='text'
          name='price'
          placeholder='Price' />
        </div>
        <div className="form-group">
          <input className="form-control"
            name='brand'
            placeholder='Brand' />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name='flavor'
            placeholder='Flavor' />
        </div>
        <button className="btn btn-success" type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;