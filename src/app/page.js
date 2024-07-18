import React from 'react';
import Link from 'next/link'
import './style.css'

export default function OptionsPage(){
  return(
    <main>
      <div className="row">
        <div className="option-box">
          <div className="option-content">
            <h2 className="box-heading"> New York Times API </h2>
            <p className="text-description"> Demonstration of using Next.js and APIs </p>
          </div>
        </div>
        <div className="option-box">
          <div className="option-content">
            <h2 className="box-heading"> GroupChat Data Visulasation </h2>
            <p className="text-description"> Demonstration of using Javascript graphs module (graph.js) and creating my own API in python</p>
          </div>
        </div>
        <div className="option-box">
          <div className="option-content">
            <h2 className="box-heading"> Random CSS Show Room </h2>
            <p className="text-description"> Random styling of a page with CSS. Show off what you can do in CSS and Javascript </p>
          </div>
        </div>
        <a href="/darts" className="option-box">
          <div className="option-content">
            <h2 className="box-heading"> Darts Quick Maths Game </h2>
            <p className="text-description"> A little mini game on improving quick math skills when playing darts </p>
          </div>
        </a>
        <div className="option-box">
          <div className="option-content">
            <h2 className="box-heading"> Steam API Show Case </h2>
            <p className="text-description"> Wanted to have fun with Steams API. Get to style a page about a user and use Next.js functionality </p>
          </div>
        </div>
      </div>
    </main>
  );
}
