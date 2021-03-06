import React, { Component } from 'react';
import {Heading} from 'react-bulma-components';
import TFCheckbox from 'Components/UI/TFCheckbox'; // Absolute path import from src enabled
import './Sidebar.css'; // Although absolute path import from src enabled, can also import using relative path
import { exampleControlState } from 'jotaiStore';

const Sidebar = () => {

    return (
        <div id = 'Sidebar'>
            <Heading> Sidebar </Heading>
            <TFCheckbox atom = {exampleControlState}/>
            Example control
        </div>
    )
}

export default Sidebar