import React from "react";
import { data,intro,sol,solution,roadmap,problem,utilities,utils,dat,
   mission, roadmap_3, roadmap_4,roadmap_2 } from "../data";


export const Home = () => {

  console.log(roadmap_4[1])


  console.log(roadmap_4[1].body[0])

  return <div >
    <div className="first-intro">
    <h1> 🐺 Welcome to DireWolfHQ
      </h1>
      <h2  >{data}</h2>
    </div>
    <div className='begin'>
      <p> MISSION</p>

      <h2 className="mission"> {mission} </h2>
    </div> <br />
    <div className="hq">
      <img className="hq" alt="hq" src="/images/hq.jpg"></img>
    </div> <br />
    <hr></hr>

    <div className="Introduc">
      <h2>Introduction</h2>
      <p>
        {intro}
      </p>
    </div>

    <p className="arrow">↓</p>
    <div className="Introduc">
      <p>
        { dat}
      </p>
    </div>
    <div >
      <img  className="App-logo"src="images/logo.png" alt="" />
    </div>
    <div >
      <h2 className="utils">UTILITIES</h2>
      <p className="util" >{utils}</p>
     
      {utilities.map((e)=>{
      return  <h3 className="check"> {e} </h3> 
      })}
    </div>
    <br />
    <div className="phase-header">
      <h2 className="">{problem}</h2>
      <img className="hq" src="/images/bac.jpg" alt="" />

      <p className="sol" > {sol} </p>
      {solution.map((e)=>{
        return <h3 className="check"> {e}</h3>
        
      })}
    </div>
    <br />
    <hr></hr> 
    <div className="roadmap">
      <h2>RoadMap</h2>
  <div className="phase-container">
    <div className="phase-header">Phase 1</div>
    <div className="phase-content">
      <p>{roadmap[0].title}</p>
      <h3>{roadmap[1].body[0]}</h3>
      <h3>{roadmap[1].body[1]}</h3>
      <h3>{roadmap[1].body[2]}</h3>
    </div>
  </div>

  <div className="phase-container">
    <div className="phase-header">Phase 2</div>
    <div className="phase-content">
      <p>{roadmap_2[0].title}</p>
      <h3>{roadmap_2[1].body[0]}</h3>
      <h3>{roadmap_2[1].body[1]}</h3>
      <h3>{roadmap_2[1].body[2]}</h3>
    </div>
  </div>
  <div className="phase-container">
    <div className="phase-header">Phase 3</div>
    <div className="phase-content">
      <p>{roadmap_3[0].title}</p>
      <h3>{roadmap_3[1].body[0]}</h3>
      <h3>{roadmap_3[1].body[1]}</h3>
      <h3>{roadmap_3[1].body[2]}</h3>
    </div>
  </div>

  <div className="phase-container">
    <div className="phase-header">Phase 4</div>
    <div className="phase-content">
      <p>{roadmap_4[0].title}</p>
      <h3>{roadmap_4[1].body[0]}</h3>
      <h3>{roadmap_4[1].body[1]}</h3>
      <h3>{roadmap_4[1].body[2]}</h3>
      
    </div>
  </div>
</div>

<div className="social-section">
  <h2 className="social-heading">Join Our Community</h2>
  <div className="social-icons">
    <a href="https://x.com/DireWolfHQ?t=ntkK7_YCnd63npAsOoK_xg&s=09" target="_blank" rel="noopener noreferrer" aria-label="X (Formerly Twitter)">
      <svg className="social-icon x-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
    
    <a href="https://t.me/DireWolfOnBase" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
      <svg className="social-icon telegram-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.03-.09.06-.42-.06-.59s-.37-.14-.75-.05c-1.08.3-2.88 1.69-4.07 2.48-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.85-.55 2.25-.83 3.75-1.38 6.03-2.32.78-.32 1.39-.49 1.65-.51.35-.02.67.04.92.28.22.21.3.47.33.65.04.33.07.85.07 1.35z"/>
      </svg>
    </a>
  </div>
</div>
 <hr />
  </div>
}
