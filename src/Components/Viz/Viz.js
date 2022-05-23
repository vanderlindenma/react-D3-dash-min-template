import React, { Component } from 'react';
import {Heading} from 'react-bulma-components';
import Circle from 'Components/Circle/Circle';
import './Viz.css';
import { useAtom } from 'jotai'

export default function Viz() {

    return (
        <div id='Viz'>
            <Heading> Viz </Heading>
            <Heading size ={6}> (Reacts dynamically to "example control" in Sidebar)</Heading>
            <Circle/>      
        </div>
    )
}