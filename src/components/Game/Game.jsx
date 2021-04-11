import React, { useState } from "react";
import "./Game.scss";
import { Link } from 'react-router-dom';
import GameSubNav from "../GameSubNav";

const Game = props => {
    return (
    <div>
        {/*This example requires Tailwind CSS v2.0+ */}
    <div>
        <GameSubNav
            name={props.name}
            back="/home"
        />
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
                    <div className="game__card">
                        <div className="game__image">
                            <img src={props.imgsrc} />
                            <div className="game__gname__container">
                        </div>
                        </div>
                        <div className="place-content-center grid grid-cols-2 gap-1 place-content-around h-0 mb-10">
                            <Link to={props.practice}>
                            <div class="rounded-md shadow mx-10">
                            <a class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-900 md:py-4 md:text-lg md:px-10 ">
                                Practice
                            </a>
                            </div>
                            </Link> 

                            <Link to={props.Start}>
                            <div class="rounded-md shadow mx-10">
                            <a class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-900 md:py-4 md:text-lg md:px-10 ">
                                Start
                            </a>
                            </div>
                            </Link>
                        </div>
                    </div>
                
            {/* /End replace */}
            </div>
        </main>
        </div>
        </div>
    );
}

export default Game;
