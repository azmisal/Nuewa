import React from 'react';
import './About.css';

export default function About() {
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
    <div classNaame="About " id="about">
       
      <div className="in reveal">
    <div className="abn reveal"><h1>What is NUEVA?</h1></div>
    <p>A convention by the students, for the students to rise above the rest and bring home ultimate glory. Nueva is where the best minds of the state gather to compete against each other across various events. Come join us on the 25th and 26th of March to take part in talks, workshops, events and much more at the 21st ISTE Annual State Student Convention.</p>
   
    </div>
   
    </div>
  )
}
