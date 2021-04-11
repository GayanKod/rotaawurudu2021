import React from "react";
import Game from "../Game/Game";
import KottaPora from "../../assests/BG_Sample.jpg";
import SNavBar from "../Navbar/SignOutNavbar";


function kottaPora(){

    return(
        <>
        <SNavBar/>
        <Game
            imgsrc={KottaPora}
            name="Kotta Pora"
            practice="kotta-pora/practice"
            Start="kotta-pora/start"
        />
        </>
    );
}

export default kottaPora;