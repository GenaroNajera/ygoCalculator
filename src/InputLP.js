import React from 'react';
import './App.js';

export default function InputLP(props) {
    return (
        <div className='Input'>
            <input type='text' value={props.LP} disabled/>
        </div>
    );
}