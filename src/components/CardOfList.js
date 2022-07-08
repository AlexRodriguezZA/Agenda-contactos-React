import React from "react";
import { BsFacebook,BsTwitter,BsLinkedin,BsInstagram,BsWhatsapp } from "react-icons/bs";
import '../styles/CardOfList.css'


const CardOfList = ({img,id,eliminarContacto}) =>{
    return(
        <div className="cards-container">
            <div className="img-container2">
                <img alt="imagen de perfil del usuario" src={img}></img>
            </div>
            <div className="redSocial-container">
                <a href="https://www.facebook.com/"><BsFacebook className="redSocial-icon"/></a>
                <a href="https://twitter.com"><BsTwitter className="redSocial-icon"/></a>
                <a href="https://www.facebook.com/"><BsLinkedin className="redSocial-icon"/></a>
                <a href="https://www.facebook.com/"><BsInstagram className="redSocial-icon"/></a>
                <a href="https://www.facebook.com/"><BsWhatsapp className="redSocial-icon"/></a>
            </div>
            <button className="button3" onClick={() => eliminarContacto(id)}>Delete</button>
        </div>
    )
}

export default CardOfList;