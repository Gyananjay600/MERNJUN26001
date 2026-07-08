import React, { useContext } from "react";
import { nameContext, themeContext } from "./App";


function Home() {
  const name = useContext(nameContext);
  const theme=useContext(themeContext)
  return (
    <div>
      Home
      <br />
      Name : {name}

      <br />
      theme :{theme}

      
    </div>
  );
}

export default Home;
