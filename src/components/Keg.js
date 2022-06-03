import React from "react";

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

export default Keg;