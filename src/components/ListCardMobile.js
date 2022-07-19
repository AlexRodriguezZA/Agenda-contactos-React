import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "../styles/ListCardMobile.css"

const ListCardMobile = ({LengthContact})=>{

    return(
        <div className="Mobile-container">
            <button>
            <span className="LengthContact"> {LengthContact} </span> 
                <BsFillPersonFill className="icon-person"/>
            </button>

        </div>
    );

}

export default ListCardMobile;
