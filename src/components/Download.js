import React from "react";
import './Download.css';

const Download = () => {
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

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('Schedule.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Schedule.pdf';
				alink.click();
			})
		})
	}
	const onBut = () => {
		// using Java Script method to get PDF file
		fetch('palmlet.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'palmlet.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center id="schedule">
                <div className="group">
				
                <button onClick={onButtonClick} className="c1 reveal">
                Inaugural Ceremony Schedule
				</button>
                <button onClick={onBut} className="c1 reveal">
                Program Details
				</button>
        
                
                <button onClick={onButtonClick} className="c1 reveal">
                Events Schedule
				</button>
                <button onClick={onButtonClick} className="c1 reveal">
                Closing Ceremony Schedule
				</button>
                </div>
				
			
				
			</center>
		</>
	);
};

export default Download;
