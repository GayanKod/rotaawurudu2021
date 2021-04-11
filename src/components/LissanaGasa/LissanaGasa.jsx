import React from "react";
import Game from "../Game/Game";
import LissanaGaha from "../../assests/BG_Sample.jpg";
import SNavBar from "../Navbar/SignOutNavbar";


function LissanaGasa(){

    return(
        <>
        <SNavBar/>
        <Game
            imgsrc={LissanaGaha}
            name="Lissana Gaha Nagima"
            practice="lissana-gasa/practice"
            Start="lissana-gasa/start"
        />
        </>
    );
}

export default LissanaGasa;