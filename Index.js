import React from 'react'; //We can remove since new version doesn't require React much
import ReactDOM from 'react-dom';
import MediaCard from './MediaCard';
import Gate from './Gate';

function H1(props){
  return(
  <div>
  <h1>{props.title}</h1>
  <p><strong>{props.para}</strong></p>
  </div>
  )
}
function H2(){
  return <h2>Quarter 3</h2>
}
function H3(){
  return <h3>Blockchain</h3>
}
ReactDOM.render(
  //<h1>Hello World</h1>, //Hello World is not a string, here we have simply written html for ease
  //React.createElement('h1', null, 'Hello World'), //This is how it is actually written in jS, babel converts html to jS 
  //document.getElementById('root')//react allows us to write html within javascript => known as JSX

  //react allows us to define our own tags/Custom components
  <div> 
  <H1 title = "Hello World" 
      para = "Paragraph written"/>
  <H2/>
  <H3/>
  <MediaCard ti = "Media Card" 
  active = {true}
  cardNumber = {1}
  description = "This is an image of a kitten" 
  image = "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg"/>
  {5+10}
  <Gate 
  active = {true}
  gateNumber = {1}/>
  </div>, //passing properties in a fuction
  //problem here is that it does not allow multiple components at same level so div made  
  document.getElementById('root')

  /*<H2/>,
  document.getElementById('root'),
  <H3/>,
  document.getElementById('root')*/
);
