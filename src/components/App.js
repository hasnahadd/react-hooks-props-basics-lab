import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
//console.log(user.links.linkedin)
function App() {
  return (
    <div>
      <NavBar />
      <Home  name={user.name} city={user.city} color={user.color}/>
      <About bio= {user.bio} link1= {user.links.linkedin} link2={user.links.github} />
     
    </div>
  );
}

export default App;
