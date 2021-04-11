import React from "react";
import Game from "../Game/Game";
import AliyataAsa from "../../assests/BG_Sample.jpg";


function aliyataAsaThabima(){

    return(
        <Game
            imgsrc={AliyataAsa}
            name="Aliyata Asa Thabima"
            practice="aliyata-asa-thabima/practice"
            Start="aliyata-asa-thabima/start"
        />
    );
}

export default aliyataAsaThabima;