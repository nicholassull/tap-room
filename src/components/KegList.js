import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  const kegListStyling = {
    padding: '0px 25px'
  }
  
  return ( 
    <React.Fragment>
      <hr />
      <div style={kegListStyling}>
        {props.kegList.map((keg) =>
          <Keg
          whenKegClicked = {props.onKegSelection}
          whenSellingPint = {props.onSellingPint}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          pintsRemaining={keg.pintsRemaining}
          id={keg.id}
          key={keg.key} />
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;