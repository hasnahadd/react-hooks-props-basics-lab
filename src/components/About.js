import React from "react";
import Links from "./Links";


function About(props) {
//{console.log(props.github)}
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio? <p>{props.bio}</p> :null
      
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.link1} linkedin={props.link2}/>
    </div>
  );
}

export default About;
