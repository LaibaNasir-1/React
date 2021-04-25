import React from 'react';
import './index.css';

function Gate(props){
    //let open = props.active;
    const [open , toggleGate] = React.useState(props.active); //Component's state management
    const brightness = open ? "lit" : "dark";
    //function toggleGate(){
    //    open = !open;
        console.log("Flag Value: ", open);
    //    document.getElementById("state").innerHTML = (open ? 'Open' : 'Closed');
    //}
    return( //checking a condition on active
        //using JSX templare
        <div className = {`gate ${brightness}`}> 
            <p>Gate Number {props.gateNumber} is {open === true ? 'Open' : 'Closed'}</p>
            <button onClick = {() => toggleGate(!open)}> Toggle </button> 
        </div> //button toggles the open but div on html is not changing as a result
               //To resolve this, we use span by ID but whole logic we have to write logic ourselves
                   //<p>Gate Number {props.gateNumber} is <span id = "state">{open === true ? 'Open' : 'Closed'}</span></p>
                   //<button onClick = {toggleGate}> Toggle </button>
               //Another solution that react provides is useState method
    )
}
//The button toggles open and changes color at the same time
//If the gate is open => BG white else BG black
export default Gate;
