import React from 'react';
import { ShowList } from './ShowList';

export const ListRender = ({ dreamToDo, setDreamToDo, filtered }) => {
    return (
        <div>
            <ul>
                {
                    filtered.map((dream) => (
                        <ShowList
                            dream={dream}
                            key={dream.id}
                            text={dream.text}
                            dreamToDo={dreamToDo}
                            setDreamToDo={setDreamToDo} />
                    ))
                }

            </ul>
        </div>
    )
}