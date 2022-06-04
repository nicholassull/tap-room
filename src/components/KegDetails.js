import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg } = props;
  const detailsStyling = {
    backgroundColor: 'azure',
    borderRadius: '8px',
    padding: '5px auto',
    textAlign: 'center',
    margin: '10px 40px'
  }
  return ( 
    <React.Fragment>
      <div style={detailsStyling} className="details-container">
        <h1>Keg Details</h1>
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