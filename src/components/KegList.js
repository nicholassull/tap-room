import React from "react";
// // import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  return ( 
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg
        // whenKegClicked = { props.onKegSelection }
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        key={keg.key} />
      )}
    </React.Fragment>
  );
}

export default KegList;