import React from 'react';
import { Form } from './Form';

export const Render = () => {
    const [input, setInput] = React.useState('');
    const [dreamToDo, setDreamToDo] = React.useState([]);


    return (
        <React.Fragment>
            <Form
                input={input}
                setInput={setInput}
                dreamToDo={dreamToDo}
                setDreamToDo={setDreamToDo} />
        </React.Fragment>
    )
}