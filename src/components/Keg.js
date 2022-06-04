import React from "react";
import PropTypes from "prop-types";


function Keg(props) {
  return ( 
    <React.Fragment>
      <div>
        <div onClick = {() => props.whenKegClicked(props.id)} className="keg-info">
          <h3>{props.name} - ${props.price}</h3>
          <p>Flavor: {props.flavor}</p>
          <p>{props.brand}</p>
        </div>
        <div className="keg-pints-container">
          <h4>Pints</h4>
          <p>Remaining: {props.pintsRemaining}</p>
          <button className="btn btn-success" onClick={() => props.whenSellingPint(props.id)}>Sell Pint</button>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  brand: PropTypes.string,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;