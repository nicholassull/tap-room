import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg } = props;
  
  return ( 
    <React.Fragment>
      <h1>Keg Details</h1>
      <div className="keg-details">
        <h3>{keg.name} - ${keg.price}</h3>
        <p>Flavor: {keg.flavor}</p>
        <p>Brand: {keg.brand}</p>
      </div>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetails;