import React from "react";
import Game from "../Game/Game";
import Balloon from "../../assests/BG_Sample.jpg";


function balloonPipirima(){

    return(
        <Game
            imgsrc={Balloon}
            name="Balloon Pipirima"
            practice="balloon-pipirima/practice"
            Start="balloon-pipirima/start"
        />
    );
}

export default balloonPipirima;