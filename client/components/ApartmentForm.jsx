import React, { Component } from 'react';
import Button from "./Button.jsx";
import '../stylesheets/apartmentForm.scss'

class ApartmentForm extends Component {

  cancel = () => {
    document.getElementById('apartmentForm').style.display='none';
  }


  render() {
    return (
      <div id="apartmentForm">
        <div>
          <form>
            <div id="formGrid">
              <div>
                <h3>Apartment Information</h3>
                <div className="aptInfo">
                  <label>Name</label><br/>
                  <input type="text" name="name" className="nameBox" />
                </div>
                <div>
                  <div className ="horizontalBlock">
                    <label> Move-in Date</label><br/>
                    <input type = "text" name = "move-in" className="movinBox"/>
                  </div>
                  <div className ="horizontalBlock">
                    <div className="space">
                      <label> Unit #</label><br/>
                      <input type = "text" name = "unit" className="unitBox"/>
                    </div>
                  </div>
                </div>
                <div className="horizontalBlock">
                  <label> Rent Price</label><br/>
                  <input type = "text" name = "price" className="rentBox"/>
                </div>
                <div className="horizontalBlock">
                  <div className="space">
                    <label> Deposit</label><br/>
                    <input type = "text" name = "deposit" className="depositBox"/>
                  </div>
                </div>
                <div>
                  <div className="horizontalBlock">
                    <label> Bed</label><br/>
                    <input type = "text" name = "bed" className="smallBox"/>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label> Bath</label><br/>
                      <input type = "text" name = "bath" className="smallBox"/>
                    </div>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label> Sq Ft</label><br/>
                      <input type = "text" name = "sqft" className="sqftBox"/>
                    </div>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label> Lease Term</label><br/>
                      <input type = "text" name = "lease" className="leaseBox"/>
                    </div>
                  </div>
                </div>

                <h3 className="location">Location</h3>
                <div className="locInfo">
                  <div className="horizontalBlock">
                    <label>City</label><br/>
                    <input type="text" name="name" className="cityBox inputbox"/>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label>State</label><br/>
                      <input type="text" name="state" className="smallBox inputbox"/>
                    </div>
                  </div>
                  <div className="horizontalBlock">
                    <div className="space">
                      <label>Zipcode</label><br/>
                      <input type="text" name="zipcode" className="sqftBox inputbox"/>
                    </div>
                  </div>
                </div>
                <div className="horizontalBlock">
                  <label>Address</label><br/>
                  <input type="text" name="address" className="addressBox inputbox"/>
                </div>
              </div>
              <div className="horizontalBlock">
                <label>Address</label><br/>
                <input type="text" name="address" className="addressBox" />
              </div>
            </div>

              <div>
                <h3>More Details</h3>
                <div className="moreInfo">
                  <label>Floor Type</label><br/>
                  <select>
                  <option value = "1">Select</option>
                    <option value = "1">Wood</option>
                    <option value = "2">Carpet</option>
                  </select>
                </div>
                <div id="utilities">
                  <div>
                    <input type = "checkbox" id = "gym" name="gym" />
                    <label for = "gym"> Gym</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "pet" name="pet"/>
                    <label for = "pet"> Pet</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "balcony" name="balcony"/>
                    <label for = "balcony"> Balcony</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "patio" name="patio"/>
                    <label for = "patio"> Patio</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "fan" name="fan"/>
                    <label for = "fan"> Fan</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "dishwasher" name="dishwasher"/>
                    <label for = "dishwasher"> Dishwasher</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "ceiling" name="ceiling"/>
                    <label for = "ceiling"> Ceiling Light</label>
                  </div>
                  <div>
                    <input type = "checkbox" id = "air" name="air"/>
                    <label for = "air"> Air Conditioning</label>
                  </div>
                </div>
                <div>
                  <input type = "checkbox" id = "pet" name="pet"/>
                  <label for = "pet"> Pet</label>
                </div>
                <div>
                  <input type = "checkbox" id = "balcony" name="balcony"/>
                  <label for = "balcony"> Balcony</label>
                </div>
                <div>
                  <input type = "checkbox" id = "patio" name="patio"/>
                  <label for = "patio"> Patio</label>
                </div>
                <div>
                  <input type = "checkbox" id = "fan" name="fan"/>
                  <label for = "fan"> Fan</label>
                </div>
                <div>
                  <input type = "checkbox" id = "dishwasher" name="dishwasher"/>
                  <label for = "dishwasher"> Dishwasher</label>
                </div>
                <div>
                  <input type = "checkbox" id = "ceiling" name="ceiling"/>
                  <label for = "ceiling"> Ceiling Light</label>
                </div>
                <div>
                  <input type = "checkbox" id = "air" name="air"/>
                  <label for = "air"> Air Conditioning</label>
                </div>
              </div>
              <div className="contact">
                <div>
                  <label>Contact </label><br/>
                  <input type = "text" name = "contact" id="contactBox"/>
                </div>
                <div className="link">
                  <label>Link </label><br/>
                  <input type = "text" name = "link" id="contactBox"/>
                </div>
              </div>
            </div>
          </div>
            
          </form>
        </div>
        <div className="btnbox">
          <Button btnname="Save" onClick={this.saveApt}/>
          <Button btnname="Cancel" onClick={this.cancel}/>
        </div>
      </div> 
    );
  };
};

export default ApartmentForm;