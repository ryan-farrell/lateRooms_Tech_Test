/* This component will be to create my checkbox filter to give the user some UI 
that will be able to filter the facilities and would change your returned search
to only include those hotels with UI selected facilities.  */

import React, { Component } from 'react';

class Filter extends Component {
   
    //Create a state that shows checked values for facilities returned in my search.
    
    render() {
return(
<div>   
<p>Facilities: </p>
    <label htmlFor = 'carPark'>Car Park </label>
    <input type = 'checkbox' name = 'facilities'    id = 'carPark'  value = 'car park'/><br/>
    <label htmlFor = 'sauna'>Sauna </label>
    <input type = 'checkbox' name = 'facilities'    id = 'sauna'    value = 'sauna'/><br/>
    <label htmlFor = 'gym'>Gym </label>
    <input type = 'checkbox' name = 'facilities'    id = 'gym'      value = 'gym'/><br/>
    <label htmlFor = 'pool'>Pool </label>
    <input type = 'checkbox' name = 'facilities'    id = 'pool'     value = 'pool'/><br/>
        <br/>
        </div>)
    }
}

export default Filter;