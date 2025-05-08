import React from "react";

function Footer(){
    const d = new Date();
     let year = d.getFullYear();
    return (
        <footer className="Footer">
        <hr style={{color:'white',border:'4px',}}></hr>

            
            <small className="name"> ©{year} Dire Wolf.</small>
            
            </footer>
    )
}

export default Footer