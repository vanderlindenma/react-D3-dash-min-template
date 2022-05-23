import React, { Component } from 'react';
import TFCheckbox from 'Components/UI/TFCheckbox'; // Absolute path import from src enabled
import './Sidebar.css'; // Although absolute path import from src enabled, can also import using relative path

const Sidebar = () => {
    return (
        <div id = 'Sidebar'>
            <TFCheckbox/>
            Example control
        </div>
    )
}

export default Sidebar