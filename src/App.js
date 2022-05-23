import React, { Component } from 'react';

import './bulma.min.css';
import { Box, Columns, Level } from 'react-bulma-components';
import './App.css';

import Sidebar from 'Components/Sidebar/Sidebar' // Absolute path import from src allowed through jsconfig.json in root (https://create-react-app.dev/docs/importing-a-component/, https://stackoverflow.com/questions/45213279/how-to-avoid-using-relative-path-imports-redux-action-action1-in-cre)
import Viz from 'Components/Viz/Viz'
import Navbar from 'Components/Navbar/Navbar'

const App = () => {

  return (
      <Columns>
        <Columns.Column size={3}>
            <Box>
            <Sidebar/>
            </Box>
        </Columns.Column>
        <Columns.Column size={9}>
            <Box>
               <Navbar/>
            </Box>
            <Box>
                <Level>
                    <Viz/>
                </Level>
            </Box>
        </Columns.Column>
      </Columns>
  );
}

export default App;
