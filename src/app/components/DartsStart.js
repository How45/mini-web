"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function DartboardGame({getGameStarted, setGameStart, changeScore, resetScore, refresh, getRefresh}) {
    const dartSpots = {
        N1 :  [["20", "51"] , ["35", "46"]],
        D1 :  ["15", "51"],
        T1 :  ["28", "47"],

        N2 :  [["75", "55"] , ["60", "48"]],
        D2 :  ["80", "58"],
        T2 :  ["67", "52"],

        N3 :  [["78", "38"] , ["66", "38"]],
        D3 :  ["85", "38"],
        T3 :  ["71", "38"],

        N4 :  [["30", "65"] , ["40", "52"]],
        D4 :  ["28", "69"],
        T4 :  ["36", "57"],

        N5 :  [["18", "32"], ["32", "35" ]],
        D5 :  ["14", "28"],
        T5 :  ["28", "33"],

        N6 :  [["48", "69"] , ["49", "57"]],
        D6 :  ["78", "18"],
        T6 :  ["49", "61"],

        N7 :  [["72", "22"] , ["62", "28"]],
        D7 :  ["15", "51"],
        T7 :  ["67", "26"],

        N8 :  [["58", "11"], ["54", "25"]],
        D8 :  ["58", "5"],
        T8 :  ["55", "18"],

        N9 :  [["32", "16"] , ["40", "26"]],
        D9 :  ["29", "9"],
        T9 :  ["35", "22"]
    };

    // const [boardScore, setBoardScore] = useState(0);

    const startGame = () => {

        const keys = Object.keys(dartSpots);

        const getRandomSpot = (dartSpots, keys) => {
            const chosenKey = keys[Math.floor(keys.length * Math.random())]

            const getValue = (num) => {
                if (num[0] === 'D')
                    {//console.log(Number(num.slice(-1))*2, num)
                        return Number(num.slice(-1))*2;}
                else if(num[0] === 'T')
                    {//console.log(Number(num.slice(-1))*3, num)
                        return Number(num.slice(-1))*3;}
                else
                    {//console.log(Number(num.slice(-1)), num)
                        return Number(num.slice(-1));}
            };

            changeScore(getValue(chosenKey));
            if (chosenKey[0] == 'N'){
                return dartSpots[chosenKey][Math.floor(Math.random()*1)];
            } else{
                return dartSpots[chosenKey];
            }
        }

        // const getRandomSpot = () => dartSpots[keys[Math.floor(keys.length * Math.random())]];
        const dartsObj = {"dart1": null, "dart2": null, "dart3": null}
        for(let key in dartsObj){
            dartsObj[key] = getRandomSpot(dartSpots, keys);
        }
        console.log(dartsObj);

        for(let id in dartsObj){
            if(Array.isArray(dartsObj[id][0])){
                const num = Math.floor(Math.random());
                document.getElementById(id).style.top = dartsObj[id][num][0]+"%";
                document.getElementById(id).style.left = dartsObj[id][num][1]+"%";

            } else{
                document.getElementById(id).style.top = dartsObj[id][0]+"%";
                document.getElementById(id).style.left = dartsObj[id][1]+"%";
            }

        }
    };

    useEffect(() => {
        if (getRefresh()) {
            console.log("Refreshed");
            resetScore(0)
            startGame();
            refresh(false);
        }
        if (getGameStarted() == 1) {
            console.log("Game Started");
            setGameStart(2);
            startGame();
        }
    }, [getGameStarted, getRefresh]);

    return (
        <div className="left">
            {getGameStarted() ? (
                <div className="board-container">
                    <Image src="/dart-board.png" alt="dartBoard" className="dartBoard" width={300} height={300}/>
                    <Image src="/darts-red.png" className="dart" id="dart1" alt="green-dart" width={35} height={35}/>
                    <Image src="/darts-green.png" className="dart" id="dart2" alt="green-dart" width={35} height={35}/>
                    <Image src="/darts-blue.png" className="dart" id="dart3" alt="blue-dart" width={35} height={35}/>
                </div>
            ) : (
                <button onClick={() => setGameStart(1)}>Start</button>
            )}
            {/* <p className='score'>Board Score: {boardScore}</p> */}
        </div>
    );
}

export default DartboardGame