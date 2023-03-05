import {React, useState} from 'react'
import './Workshop.css'
import elektra from '../Assets/elektra.jpeg'
import docbg from '../Assets/doc-bg.png'
import { AiOutlineClose } from "react-icons/ai";

const Event = () => {

    let content = [
        {
            image: elektra,
            title: "KRANTHI",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "ELEKTRA",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "INFINOIA",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "LETO",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "LETO",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        }
    ];const [showDiv, setShowDiv] = useState(false);

    const handleOpen = () => {
        setShowDiv(true);
        console.log(showDiv)
        document.body.style.overflowY = showDiv ? "auto" : "hidden";
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    };
    const handleClose = () => {
        setShowDiv(false);
        document.body.style.overflowY = showDiv ? "auto" : "hidden";
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    }
    return (

        <div className="event">

            <div className="sheet"id="card2">
                <h1 style={{ color: 'rgb(240 96 0)', fontSize: '6vw', fontFamily: 'Chakra Petch' }}>Events</h1>

                <div className="innersheet">
                    {content.map((element, ctx) => (
                        <>
                        <div className="card">
                            <div className="mainhead">
                                <h1 className='head'>{element.title}</h1>
                                <p>{element.date}</p>
                            </div>
                            <img src={element.image} alt="" className='imag' />
                            <h2 className="head3">{element.cost}</h2>
                            <div className="comb">
                                <div className="reg1">
                                    <div className="reg2">
                                        <p>Register</p>
                                    </div>
                                </div>
                                <button onClick={handleOpen}>LEARN MORE</button>
                                </div>
                            </div>
                            {showDiv && <div className='cardDoc'>

                                <div className='cardDocIn'>
                                    <div className='docImg'>
                                        <img src={docbg} alt=""></img>
                                    </div>
                                    <div className='docContent'>
                                        <button onClick={handleClose}><AiOutlineClose size={40}/></button>
                                        <h1>KRANTHI{"\n"}</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                </div>
                            </div>}
                        </>
                    ))}
                </div>
            </div>

        </div>

    );
}

export default Event;