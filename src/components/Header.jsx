import React from "react";


function Header(){
    return(
        <div display="flex" align-items="start" className="App">
       <header className="App-header">

        <h1 className="title">DireWolfHQ</h1>
        
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="App-log" alt="logo" />
       <p>
        
        </p>
        
      </header>
 </div>
        )
}

export default Header;