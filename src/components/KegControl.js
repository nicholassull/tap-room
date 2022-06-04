import React from "react";
import KegList from "./KegList";
import KegDetails from "./KegDetails";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      formVisibleOnPage: false,
      mainKegList: [
        {
          name: "Night Sky",
          brand: "Kile's Kombucha",
          price: 5,
          flavor: "London Fog",
          pintsRemaining: 2,
          id: "0",
          key: "0"
        },
        {
          name: "Shepherding Goats",
          brand: "Flying High",
          price: 6,
          flavor: "Ambiguous",
          pintsRemaining: 124,
          id: "1",
          key: "1"
        }
      ]
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
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

  handleSellingPint = (id) => {
    let selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    const unselectedKegs = this.state.mainKegList.filter(keg => keg.id !== id);
    if (selectedKeg.pintsRemaining > 1) {
      selectedKeg.pintsRemaining = selectedKeg.pintsRemaining -1;
      const newMainKegList = unselectedKegs.concat(selectedKeg);
      this.setState({
        mainKegList: newMainKegList
      });
    } else {
      this.setState({
        mainKegList: unselectedKegs
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails
      keg = {this.state.selectedKeg}
      />
      buttonText = "Return to List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList}
      onKegSelection={this.handleChangingSelectedKeg} onSellingPint={this.handleSellingPint}
      />
      buttonText = "Add New Keg";
    }

    const buttonContainerStyling = {
      display: 'grid'
    }
    const buttonStyling = {
      textAlign: 'left',
      margin: '20px auto'
    }

    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <div style={buttonContainerStyling}>
          <button className="btn btn-primary" style={buttonStyling} onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default KegControl;