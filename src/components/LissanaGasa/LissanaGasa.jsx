import React from "react";
import Game from "../Game/Game";
import LissanaGaha from "../../assests/LissanaGaha.png";
import SNavBar from "../Navbar/SignOutNavbar";
import LeaderBoard from "../LeaderBoard/LeaderBoard";


function LissanaGasa() {

    return (
        <>
            <SNavBar />
            <Game
                imgsrc={LissanaGaha}
                name="Lissana Gaha Nagima"
                practice="/games/lissana-gaha/?practice=true"
                Start="/games/lissana-gaha/"
            />
            <LeaderBoard game="LissanaGasa" />
        </>
    );
}

export default LissanaGasa;