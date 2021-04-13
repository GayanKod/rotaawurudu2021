import React from "react";
import Game from "../Game/Game";
import Balloon from "../../assests/BG_Sample.jpg";
import SNavBar from "../Navbar/SignOutNavbar";


function balloonPipirima() {

    return (
        <>
            <SNavBar />
            <Game
                imgsrc={Balloon}
                name="Balloon Pipirima"
                practice="games/balloon/?practice=true"
                Start="games/balloon/"
            />
        </>
    );
}

export default balloonPipirima;