import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg, onClickingDelete} = props;
  
  return ( 
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - ${keg.price}</h3>
      <p>Flavor: {keg.flavor}</p>
      <p>Brand: {keg.brand}</p>

    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetails;