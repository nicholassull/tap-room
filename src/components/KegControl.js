import React from "react";
import KegList from "./KegList";
import Test from "./Test";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [
        {
          name: "Night Sky",
          brand: "Kile's Kombucha",
          price: 5,
          flavor: "London Fog",
          key: "0"
        },
        {
          name: "Shepherding Goats",
          brand: "Flying High",
          price: 6,
          flavor: "Ambiguous",
          key: "1"
        }
      ]
    };
  }

  render() {
    let currentlyVisibleState = <KegList kegList={this.state.mainKegList} />
    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <div>Hello</div>
      </React.Fragment>
    );
  }
}

export default KegControl;