"use client";

import { useState, useEffect } from "react";

function MiskBox({getStart, setStart}){
    const [timeSeconds, setTimeSeconds] = useState(10);
    const [timeMinutes, setTimeMinutes] = useState(0);
    const [timeHours, setTimeHours] = useState(0);


    useEffect(() => {
        if(getStart() > 0){
            const countdown = setInterval(() => {
                if (timeMinutes === 0 && timeSeconds === 0 && timeHours === 0) {
                    console.log("END");
                    setTimeSeconds(10);
                    setStart(0);
                } else if (timeSeconds === 0) {
                    if (timeMinutes === 0) {
                        setTimeMinutes(59);
                        setTimeHours(prev => prev - 1);
                    } else {
                        setTimeMinutes(prev => prev - 1);
                        setTimeSeconds(59);
                    }
                } else {
                    setTimeSeconds(prev => prev - 1);
                }
                }, 1000);

            return () => clearInterval(countdown);
        }
    }, [getStart, timeSeconds, timeMinutes, timeHours]);
    return(
        <div className="top-right">
            <div className="Timer-Text">
                <p>{`${timeHours.toString().padStart(2, '0')}:${timeMinutes.toString().padStart(2, '0')}:${timeSeconds.toString().padStart(2, '0')}`}</p>
            </div>
            <div className="Score-Text">
                {getStart() ? (
                    <p>Score</p>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default MiskBox;