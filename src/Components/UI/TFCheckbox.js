import React, { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useAtom } from 'jotai'

function TFCheckbox(props) {

    const [contState, setcontState] = useAtom(props.atom)

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
