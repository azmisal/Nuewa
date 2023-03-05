import React,{useState} from "react";
import "./App.css";
// import Tag from "./components/Tag";
import Home from "./components/Home";
import Istelogo from "./components/Istelogo";
import Hover from "./components/Hover";
import About from "./components/About";
import Footer from "./components/Footer";
import Scrollanimation from "./components/Scrollanimation";
import Gevents from "./components/Gevents";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Vid1 from "./components/Vid1";
import Vid2 from "./components/Vid2";
import Vid3 from "./components/Vid3";
function App() {
 const[loading,setloading]=useState(false);
 const spinner=document.getElementById('spinner');
 if(spinner){
   setTimeout(()=>{
        spinner.style.display='none';
        setloading(false);
   },1000)
 }function reveal() {
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
     !loading &&
(  
      <div className="app">
            
          
              
                 <Navbar />
                <Hover />
                <section>
                  <div className="cont reveal">
                <About />
                </div>
                </section>
                <section>
                <div className="cont reveal">
                <Gevents/>
                </div>
                </section>
                <section>
                <div className="cont reveal">
                <Vid1 />
                </div>
                </section>
                <section>
                <div className="cont reveal">
                <Download />
                </div>
                </section>
                <section>
                <div className="cont reveal">
                <Vid2 />
                </div>
                </section>
                <section>
                <div className="cont reveal">
                <Scrollanimation />
                </div>
                </section>
                <section>
                <div className="cont reveal">
                <Footer />
                </div>
                </section>
             
              
            
          

          
      </div>
)
  );
}

export default App;
