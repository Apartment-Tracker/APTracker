import React from 'react';
import Button from "./Button.jsx";

const Header = props => {
  const columns = {
    c1: 'Apartment Name',
    c2: 'Location',
    c3: 'Rent',
    c4: 'Bed / Bath',
    c5: 'Move-In',
    c6: 'Pet',
    c7: 'Sq ft',
    c8: 'Details',
  };

  return(
    <div>
      <div className="header">
        <Button btnname="Add Apartment" create='sendPOSTRequest'/>
      </div>
      <div id="aptRow">
        <div className="colH apartment toLeft">{columns.c1}</div>
        <div className="colH location toLeft">{columns.c2}</div>
        <div className="colH rent">{columns.c3}</div>
        <div className="colH bedbath">{columns.c4}</div>
        <div className="colH movein">{columns.c5}</div>
        <div className="colH pet">{columns.c6}</div>
        <div className="colH sqft sqftH">{columns.c7}</div>
        <div className="colH details dH">{columns.c8}</div>
      </div>
    </div>
  );
};

export default Header;