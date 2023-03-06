import {React,useState} from 'react'
import './Workshop.css'
import elektra from '../Assets/elektra.jpeg'
import docbg from '../Assets/doc-bg.png'
import { AiOutlineClose } from "react-icons/ai";
import event from "../Assets/elektra.jpeg";
import wave from '../Assets/wavy.jpg';

const Workshop = () => {
    const [item1,setItem1] = useState(null);
    const [item2,setItem2] = useState(null);
    const [item3,setItem3] = useState(null);



    const handleItem = (item1,item2,item3) =>{
        setItem1(item1);
        setItem2(item2);
        setItem3(item3);
    }

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
            image: wave,
            title: "Wavy",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "adacjdbaflcja ljvh akfh;bv;kahfvk; abksvkwdbvkhbfsvkbefksv fhsbvkdsjbvdsbvbvsckb dkhzxb hsdab z xcjhabdkjc zxkhb xhjbchcvbadshvadbk"
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
    ];
    const [showDiv, setShowDiv] = useState(false);

    const handleOpen = () => {
        setShowDiv(!showDiv);
        console.log("clicked");
    }
    const iconStyle={
        color:'white',
        fontSize:'3vw',
        right:'13vw',
        height:'3vw',
        width:'5vw',
        top:'12vw',
        position: 'absolute',
        cursor:'pointer'

    }
    
    return (

        <div className="event" >

            <div className="sheet" >
                <div className="workhead" ><h1 style={{ color: 'rgb(240 96 0)', fontSize: '6vw', fontFamily: 'Chakra Petch' }}>Workshops</h1></div>

                <div className="innersheet" id="card1" >

                    {content.map((element, ctx) => (
                        <>
                        <div className="card" >
                            <div className="mainhead">
                                <h1 className='head'>{element.title}</h1>
                                <p>{element.date}</p>
                            </div>
                            <img src={element.image} alt="" className='imag' />
                            <h2 className="head3">{element.cost}</h2>
                            <div className="comb">
                                <div className="reg1">
                                    <div className="reg2" href="www.google.com">
                                        <p>Register</p>
                                    </div>
                                </div>
                                <button onClick={()=>{handleOpen();handleItem(element.image,element.title,element.learn); }}>LEARN MORE</button>
                            </div>
                        </div>
                        
                        
                        </>
                    ))}
                    <div className={`pop ${showDiv ? "popCard" : "nobut"} active`} onClick={handleOpen}>
                        <div className="wholeCont"><div className="goleft">
                            <img src={item1} alt="" />
                        </div>
                        <div className="goright">
                            <AiOutlineClose  style={iconStyle}onClick={handleOpen}/>
                            <h1>{item2}</h1>
                            <p>{item3}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Workshop;