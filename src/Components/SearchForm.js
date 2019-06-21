// This component will be my JSX layout for my form input and set the starting state on intial render.
import React from "react";

/* Invoking a function that will run on the 'onSubmmit event' in my JSX form and render below which
   should be on clicking the submit button or on enter press. */

const SearchForm = ({HandleSubmit}) => {
  return (
    <div className="searchForm">
      {/* onSubmit is a better event handler than onClick as it will catch any enter 
   presses on the users keyboard */}
      <form id="object" name="object" onSubmit={HandleSubmit}>
        {/*I'll need to set each label to equal the same as my key in my JSON file which when returned I can find.
                First example being location = 'user input' */}
        <label htmlFor="location" id="location">Location: </label>
        <input type="text" name="location" /> {/**IDEA** onChange = {'Search thru JSON and give possible returns'}*/}<br />
        <label htmlFor="hotelName">Hotel Name: </label>
        <input type="text" name="hotelName" id="hotelName" /><br />
        <label htmlFor="starRating">Star Rating: </label>
        <input type="number" name="starRating" min="1" max="5" id="starRating"/><br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
