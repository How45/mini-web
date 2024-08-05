"use client";
import React, { useEffect, useState } from 'react';
import Darts from "../components/DartsStart";
import Cal from "../components/CalButton";
import Timer from "../components/MiskBox";

function Game(){
    const [gameStarted, setGameStarted] = useState(0);
    const [boardScore, setBoardScore] = useState(0);
    const [newBoard, setNewBoard] = useState(false);

    const setGameStart = (valuekey) => {setGameStarted(valuekey)};
    const getGameStarted = () => {return gameStarted};

    const updateScore = (valueKey) =>{setBoardScore(prevScore => prevScore + valueKey)};
    const resetScore = () => {setBoardScore(0)};
    const getScore = () => {return boardScore};

    const updateRefresh = (key) => {setNewBoard(key)};
    const getRefreshValue = () => {return newBoard};

    return(
        <main>
            {/* Image of Darts will be here */}
            <Darts
                getGameStarted={getGameStarted}
                setGameStart={setGameStart}

                score={getScore}
                changeScore={updateScore}
                resetScore={resetScore}

                refresh = {updateRefresh}
                getRefresh={getRefreshValue}/>

            <Timer
                getStart={getGameStarted}
                setStart={setGameStart}/>

            <Cal
                score={getScore}
                refresh = {updateRefresh}/>
        </main>
    );
}

export default Game