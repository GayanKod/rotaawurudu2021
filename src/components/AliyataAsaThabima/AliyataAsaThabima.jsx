import React from "react";
import Game from "../Game/Game";
import AliyataAsa from "../../assests/AliyataAsaThabima.png";
import SNavBar from "../Navbar/SignOutNavbar";
import LeaderBoard from "../LeaderBoard/LeaderBoard";


function aliyataAsaThabima() {

    return (
        <>
            <SNavBar />
            <Game
                imgsrc={AliyataAsa}
                name="Aliyata Asa Thabima"
                practice="/games/aliyata-esa-thabeema/?practice=true"
                Start="/games/aliyata-esa-thabeema/"
            />
            <LeaderBoard game="AliyataAsaThebima" />
        </>
    );
}

export default aliyataAsaThabima;