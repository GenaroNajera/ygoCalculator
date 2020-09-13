import React from 'react';
import './App.css'

export default function NumPad(props) {
    return (
        <div className='NumPad'>
            <button onClick={props.handleNumClick} value='1'>1</button>
            <button onClick={props.handleNumClick} value='2'>2</button>
            <button onClick={props.handleNumClick} value='3'>3</button>
            <br/>
            <button onClick={props.handleNumClick} value='4'>4</button>
            <button onClick={props.handleNumClick} value='5'>5</button>
            <button onClick={props.handleNumClick} value='6'>6</button>
            <br/>
            <button onClick={props.handleNumClick} value='7'>7</button>
            <button onClick={props.handleNumClick} value='8'>8</button>
            <button onClick={props.handleNumClick} value='9'>9</button>
            <br/>
            <button onClick={props.handleOpClick} value='+'>+</button>
            <button onClick={props.handleNumClick} value='0'>0</button>
            <button onClick={props.handleOpClick} value='-'>-</button>
            <br/>
            <button onClick={props.handleEnterClick} value='e'>Enter</button>
            <button onClick={props.handleBackClick} value='b'>Back</button>
        </div>
    );
}