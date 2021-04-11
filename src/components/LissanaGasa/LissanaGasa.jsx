import React from "react";
import Game from "../Game/Game";
import LissanaGaha from "../../assests/BG_Sample.jpg";


function LissanaGasa(){

    return(
        <Game
            imgsrc={LissanaGaha}
            name="Lissana Gaha Nagima"
            practice="lissana-gasa/practice"
            Start="lissana-gasa/start"
        />
    );
}

export default LissanaGasa;