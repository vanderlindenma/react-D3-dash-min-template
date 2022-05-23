import React, { Component } from 'react';
import Circle from 'Components/Circle/Circle';
import './Viz.css';
import { useAtom } from 'jotai'

export default function Viz() {

    return (
        <div id='Viz'>
            <Circle/>      
        </div>
    )
}