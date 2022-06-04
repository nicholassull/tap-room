import React from "react";
import PropTypes from "prop-types";


function Keg(props) {
  // const containerStyling = {
  //   display: 'grid',
  //   alignItems: 'center'
  // }
  // const pintsContainerStyling = {
  //   float: 'right'
  // }
  
  return ( 
    <React.Fragment>
      <div className="row">
        <div className="keg-details col">
          <div onClick = {() => props.whenKegClicked(props.id)} className="keg-info">
            <h3>{props.name} - ${props.price}</h3>
            <p>Flavor: {props.flavor}</p>
            <p>{props.brand}</p>
          </div>
        </div>
        <div className="keg-pints-container col">
          <h4>Pints</h4>
          <p>Remaining: {props.pintsRemaining}</p>
          <button className="btn btn-success" onClick={() => props.whenSellingPint(props.id)}>Sell Pint</button>
        </div>
      </div>
      <hr />
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