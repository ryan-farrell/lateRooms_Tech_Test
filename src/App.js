//import React from 'react';
import React, { Component } from "react";
import ReturnedSearch from "./Components/ReturnedSearch";
import SearchForm from "./Components/SearchForm";
import Filter from "./Components/Filter";

const object = require("./lateRooms");
// Requiring our JSON file this way will ensure that our new 'object' variable can be used below.


const HandleSubmit = (e) => {
  e.preventDefault();
  /* 'e.preventDefault is invoked so as to refresh the page which would be the default action Submit event 
  is invoked from the UI */
  
  let _location = document.getElementsByName("location")[0].value;
  let _hotelName = document.getElementsByName("hotelName")[0].value;
  let _starRating = document.getElementsByName("starRating")[0].value;
  
/****** These no longer work as not in the local file of searchform so will need to use props? to pull back info 
 and store in these temporay variables **********/


  let srcObj = {
    name: _hotelName,
    starRating: _starRating,
    location: _location
  };
  
  Object.values(srcObj)
  /* This will retun our object into and array of our search values. Ready to be used on our JSON file 
  below we then can loop though and return a new array to be displayed in our return search component.*/
  Object.values(object)

  /* I now need this function to search the JSON file laterRooms.json. On an empty request I will require 
  it to pull back the entire object. */

};

class App extends Component {
  /* As React works in states I'll load my original state as null awaiting user input and on events within the UI 
  I'll be able to change the state to be discovered.*/
      state = {
        hotels: [
          { hotelName: null, 
            starRating: null, 
            location: null }]
      };


  render() {
    return (
      <div className="App">
        <h2>LateRooms Tech Test</h2>
        <SearchForm HandleSubmit ={this.HandleSubmit}/>
        <br />
        <Filter />
        <br />
        <ReturnedSearch />
      </div>
    );
  }
}

export default App;
