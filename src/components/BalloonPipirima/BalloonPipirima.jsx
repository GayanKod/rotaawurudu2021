import React from "react";
import Game from "../Game/Game";
import Balloon from "../../assests/Balloon.png";
import SNavBar from "../Navbar/SignOutNavbar";
import LeaderBoard from "../LeaderBoard/LeaderBoard";


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
            <LeaderBoard game="BaloonPipirima" />
        </>
    );
}

export default balloonPipirima;