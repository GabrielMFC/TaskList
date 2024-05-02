import { useState } from "react";
import "./nav.css"
import { IoIosAddCircle } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { RiEditCircleFill } from "react-icons/ri";
function NavBar(){
    const[cor, setcor] = useState("gray")
    return(
        <>
        <div id="Centralizarflexi">
            <div id="menu" className={cor}>
                <div id="CentralizarCaixaDeColisao">
                    <div className="colisao" onMouseEnter={() => {setcor("green")}} onMouseOut={() => {setcor("gray")}}></div>
                    <div className="colisao" onMouseEnter={() => {setcor("red")}} onMouseOut={() => {setcor("gray")}}></div>
                    <div className="colisao" onMouseEnter={() => {setcor("blue")}} onMouseOut={() => {setcor("gray")}}></div>
                </div>
                <IoIosAddCircle className="icon"/>
                <TiDelete id="deleteIcon" className="icon"  />
                <RiEditCircleFill className="icon"  />
            </div>
        </div>
        </>
    )
}
export default NavBar