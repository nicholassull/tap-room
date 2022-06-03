import React from "react";
import PropTypes from "prop-types";
import KegControl from "./KegControl";

function KegList(props) {
  return ( 
    <React.Fragment>
      <hr />
      {props.KegList.map((keg) =>
        <Keg
        whenKegClicked = { props.onKegSelection }
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor} />
      )}
    </React.Fragment>
  );
}

export default KegList;