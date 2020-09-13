import React, { useState } from 'react'
import './App.js';

export default function LifePoints(props) {
    return (
        <div>
            <h1 id='Player1' onClick={() => props.handlePlayerClick(1)}>Player 1: {props.LP1} LP</h1>
            <h1 id='Player2' onClick={() => props.handlePlayerClick(2)}>Player 2: {props.LP2} LP</h1>
        </div>
    );
}