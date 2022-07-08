import React from "react";

import '../styles/Card.css'

import { BsFillPersonFill,BsFillTelephoneFill,BsFillEnvelopeFill,BsFillGeoFill,BsFillCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

const Card = ({img, CompleteName, userName, age, tel, correo, country, Location, id, agregarContacto,recargarDatos})=>{  
    
    return(
        <div className="card-container">
            <div className="img-container">
                <img alt="imagen de perfil del usuario" src={img}></img>
            </div>
            <div className="data-container">
                <div className="name-container">
                    <h1>{CompleteName}</h1>
                    <p>{age}</p>
                </div>
                <div className="data-data-container1">
                    <p className="data1"><BsFillPersonFill/> {userName}</p>
                    <p className="data2"><BsFillEnvelopeFill/> {correo}</p>
                    <p className="data3"><BsFillTelephoneFill/> {tel}</p>
                </div>
                <div className="data-data-container2">
                    <p className="data3"><BsFillGeoFill/>{Location} - {country}</p>
                </div>
            </div>
            <div className="button-container">
                <button className="button1" onClick={()=> agregarContacto()}><BsFillCheckCircleFill/></button>
                <button className="button2" onClick={()=>  recargarDatos()}><BsFillXCircleFill/></button>
            </div>
            
        </div>
    )
}

export default Card;