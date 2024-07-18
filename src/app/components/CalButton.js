"use client";
import { useEffect, useState } from 'react';

function Calculator({score, refresh}){
    const [displayValue, setDisplayValue] = useState('')

    const GetValue = (val) =>{
        setDisplayValue(prevValue => prevValue.length < 5 ? prevValue + val : prevValue);
    };

    const clearTask = () => {
        setDisplayValue('');
    };

    const submit = () => {
        const value = score();

        console.log(value, displayValue)
        if (value === Number(displayValue)){
            console.log("Correct!");
            refresh(true);
        }
        else{
            console.log("Try Again!")
        }
        clearTask();
    };

    return(
    <div className="calculator">
        <form method="get" readOnly>
            <div className="display">
                <input type="text" id="display" value={displayValue} readOnly></input>
            </div>
            <div>
                <input type="button" value="7" onClick={() => GetValue('7')} readOnly></input>
                <input type="button" value="8" onClick={() => GetValue('8')} readOnly></input>
                <input type="button" value="9" onClick={() => GetValue('9')} readOnly></input>
            </div>
            <div>
                <input type="button" value="4" onClick={() => GetValue('4')} readOnly></input>
                <input type="button" value="5" onClick={() => GetValue('5')} readOnly></input>
                <input type="button" value="6" onClick={() => GetValue('6')} readOnly></input>
            </div>
            <div>
                <input type="button" value="1" onClick={() => GetValue('1')} readOnly></input>
                <input type="button" value="2" onClick={() => GetValue('2')} readOnly></input>
                <input type="button" value="3" onClick={() => GetValue('3')} readOnly></input>
            </div>
            <div>
                <input type="button" value="CE" onClick={clearTask} readOnly></input>
                <input type="button" value="0" onClick={() => GetValue('0')} readOnly></input>
                <input type="button" value="=" onClick={submit} readOnly></input>
            </div>
        </form>
    </div>);
}
export default Calculator
