import React from "react";
import Game from "../Game/Game";
import KottaPora from "../../assests/KottaPora.png";
import SNavBar from "../Navbar/SignOutNavbar";
import LeaderBoard from "../LeaderBoard/LeaderBoard";


function kottaPora() {

    return (
        <>
            <SNavBar />
            <Game
                imgsrc={KottaPora}
                name="Kotta Pora"
                practice="/games/kotta-pora/?practice=true"
                Start="/games/kotta-pora/"
            />
            <LeaderBoard game="KottaPora" />
        </>
    );
}

export default kottaPora;