import React from "react";

import CardOfList from "./CardOfList";
import '../styles/ListCard.css'

const ListCard = ({ listaDeContactos,FuncionEliminarContacto })=>{
    return(
        
        <div className="lista-container">
            
            <div className="title-container">
                <h2>Contactos</h2>
            </div>
            <div className="listado">
            {listaDeContactos.map( contact => ( 
                <CardOfList key={contact.login.uuid}
                            img={contact.picture.large} 
                            id={contact.login.uuid}
                            eliminarContacto={FuncionEliminarContacto}
                />))}
                          
            </div>

        </div>

    )   

}

export default ListCard;

