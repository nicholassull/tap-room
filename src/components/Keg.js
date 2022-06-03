import React from "react";
import PropTypes from "prop-types";


function Keg(props) {
  return ( 
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - ${props.price}</h3>
        <p>Flavor: {props.flavor}</p>
        <p>{props.brand}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  brand: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;