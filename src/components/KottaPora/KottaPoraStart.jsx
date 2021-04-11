import React from "react";
import {Link} from "react-router-dom";
import GameSubNav from "../GameSubNav";

function kottaPoraStart(){
    
    return(
        <GameSubNav
            name="Kotta Pora"
            back="/kotta-pora"
        />
    );

}


export default kottaPoraStart;