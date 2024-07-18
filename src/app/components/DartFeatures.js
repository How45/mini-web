"use client";
import React, { useState } from 'react';
import Darts from "../components/DartsStart";
import Cal from "../components/CalButton"

function Game(){
    const [boardScore, setBoardScore] = useState(0);
    const [newBoard, setNewBoard] = useState(false);

    const updateScore = (valueKey) =>{setBoardScore(prevScore => prevScore + valueKey)};
    const getScore = () => {return boardScore;}

    const updateRefresh = (key) => {setNewBoard(key);};
    const getRefreshVal = () => {return newBoard;}

    return(
        <main>
            {/* Image of Darts will be here */}
            <Darts 
                score={getScore}
                changeScore={updateScore}
                refresh = {updateRefresh}
                getRefresh={getRefreshVal}/>
            <div className="container">
                <Cal
                    score={getScore}
                    refresh = {updateRefresh}/>
            </div>
        </main>
    );
}

export default Game