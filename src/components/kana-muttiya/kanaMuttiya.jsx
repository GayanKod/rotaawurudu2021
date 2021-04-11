import React from "react";
import Game from "../Game/Game";
import KanaMuttiya from "../../assests/BG_Sample.jpg";


function kanaMuttiya(){

    return(
        <Game
            imgsrc={KanaMuttiya}
            name="Kana Muttiya Bidima"
            practice="/kana-muttiya/practice"
            Start="kana-muttiya/start"
        />
    );
}

export default kanaMuttiya;