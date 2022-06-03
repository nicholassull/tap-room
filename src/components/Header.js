import React from "react";

function Header() {
  const headerStyling = {
      padding: '10px',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0px auto',
    }
  return ( 
    <React.Fragment>
      <div style={headerStyling} className="header">
        <h1>The Tap Room</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;