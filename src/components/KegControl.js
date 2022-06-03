import React from "react";
import KegList from "./KegList";

class KegControl extends Component {
  constructor(props) {
    super(props);
  }
  state = { 
    mainKegList: [
      {
        name: "Night Sky",
        brand: "Kile's Kombucha",
        price: 5,
        flavor: "London Fog"
      },
      {
        name: "Shepherding Goats",
        brand: "Flying High",
        price: 6,
        flavor: "Ambiguous"
      }
    ]
  }
  render() {
    let currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
    return ( 
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default KegControl;