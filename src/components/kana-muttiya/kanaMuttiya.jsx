import React from "react";
import Game from "../Game/Game";
import KanaMuttiya from "../../assests/BG_Sample.jpg";
import SNavBar from "../Navbar/SignOutNavbar";


function kanaMuttiya(){

    return(
        <>
        <SNavBar/>
        <Game
            imgsrc={KanaMuttiya}
            name="Kana Muttiya Bidima"
            practice="/kana-muttiya/practice"
            Start="kana-muttiya/start"
        />
        </>
    );
}

export default kanaMuttiya;