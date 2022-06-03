import React from "react";
import KegList from "./KegList";
import KegDetails from "./KegDetails";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      mainKegList: [
        {
          name: "Night Sky",
          brand: "Kile's Kombucha",
          price: 5,
          flavor: "London Fog",
          id: "0",
          key: "0"
        },
        {
          name: "Shepherding Goats",
          brand: "Flying High",
          price: 6,
          flavor: "Ambiguous",
          id: "1",
          key: "1"
        }
      ]
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedKeg: null,
        // editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails
      keg = {this.state.selectedKeg}
      />
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList}
      onKegSelection={this.handleChangingSelectedKeg}
      />
      buttonText = "Add New Keg";
    }



    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;