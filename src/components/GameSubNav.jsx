import React from "react";
import { Link } from 'react-router-dom';

function GameSubNav(props){

    return(
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
            <Link to={props.back}>
            <i class="fa fa-arrow-left mx-5" aria-hidden="true"></i></Link>  {props.name}
            </h1>
            </div>
        </header>
    );
}


export default GameSubNav;