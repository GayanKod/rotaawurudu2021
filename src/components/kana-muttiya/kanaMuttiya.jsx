import React from "react";
import Game from "../Game/Game";
import KanaMuttiya from "../../assests/KanaMuttiya.png";
import SNavBar from "../Navbar/SignOutNavbar";
import LeaderBoard from "../LeaderBoard/LeaderBoard";


function kanaMuttiya() {

    return (
        <>
            <SNavBar />
            <Game
                imgsrc={KanaMuttiya}
                name="Kana Muttiya Bidima"
                practice="/games/kana-mutti/?practice=true"
                Start="/games/kana-mutti/"
            />
            <LeaderBoard game="kanaMuttiya" />
        </>
    );
}

export default kanaMuttiya;