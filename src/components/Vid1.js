import React from 'react'
import "./Vid.css";
import Vid3 from '../components/Vid3';
import Robowar from "../Assets/robots.jpg";
export default function Vid() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  return (
    <div className="Vid">
      <section>
        <div className="highlight1 reveal">
    
        <Vid3 className='robo'/>
        <div className="roh1"><h1>ROBOWAR</h1>
        <p>Witness the clash of robots as they battle it out to be the last one standing.
Unleash your engineering skills and create the ultimate bot for the Robowar competition to dominate the battlefield. 
Join us to experience the excitement and adrenaline rush of Robowar!</p>
        </div>
        
        {/* <img src={Robowar} alt="robots" className='robo'/> */}
        
        
        </div>
        </section>
        <section>
        <div className="highlight2 reveal">
        <Vid3 className='robo'/>
        <div className="roh2"><h1>LAZERMAZE</h1>
        <p>Get ready to experience the ultimate test of agility and strategy - the Laser Maze competition!
Navigate through a maze of laser beams and avoid getting hit to emerge as the champion.
Join us for a rousing event filled with excitement and adventure!</p>
       </div>
        </div>
        </section>
     
           </div>
  )
}
