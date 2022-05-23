import React, { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { exampleControlState } from 'jotaiStore.js';
import { useAtom } from 'jotai'

const TFCheckbox = () => {

    const [contState, setcontState] = useAtom(exampleControlState)
    console.log(contState)

    return( 
        <Checkbox
        defaultChecked = {true}
        value = {contState}
        onChange={e => (
            e.target.checked ? setcontState('true') : setcontState('false') 
        )}
        />
    )
}

export default TFCheckbox;