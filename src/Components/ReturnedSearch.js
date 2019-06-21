// This component will be my JSX layout for my returned search results.
import React, { Component } from "react";


const object = require("../lateRooms");
// Requiring our JSON file this way will ensure that our new 'object' variable can be used below.


class ReturnedSearch extends Component {  
  render() {
    const hotelsList = object.map( hotel => {
      /*  I'll be creating a new temp array from my original array 'lateRooms.JSON' file which we required and saved as 'object' above and now use map() to iterate
        through and for each hotel render the following JSX information in our page. I received an error originaly in my console as each child of this component
        should have its own key property. I included a 'refNo' key pair in our original JSON file so I can use this. This array will eventually be my retuned records 
        from my search.*/

      /* If I refence each instance of my return with a key attribute to avoid react error shown in console.  */    
      return (
        <div className="returnedSearch" key={hotel.refNo}>
          <div> Hotel Name: <strong>{hotel.name}</strong></div>  
          <div>City: {hotel.location}</div>
          <div>Star Rating: {hotel.starRating} </div>
          <div>Facilities: {hotel.facilities} </div>
          <br />
        </div>
      );
    });

    return <div>{hotelsList}</div>;
    /* Now returning a newly created array and rendering this as our content. */
  }
}

export default ReturnedSearch;
