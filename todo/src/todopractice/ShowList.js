import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
export const ShowList = ({ text, dreamToDo, setDreamToDo, dream }) => {
    const onCheckHandleClick = () => {
        setDreamToDo(dreamToDo.map((item) => {
            if (item.id === dream.id) {
                return { ...item, completed: !item.completed }
            }
            return item
        }))

    }

    const onDeleteHandlerClick = () => {
        setDreamToDo(dreamToDo.filter((del) => del.id !== dream.id))
    }
    return (
        <div className="container">
            <li
                className={`list ${dream.completed ? "completed" : ""}`}>
                <div className="cont">
                    {text}

                    <button
                        onClick={onCheckHandleClick}
                        className='btn'>
                        <span
                            className="icon check">
                            <CheckIcon />
                        </span>
                    </button>
                    <button
                        onClick={onDeleteHandlerClick}
                        className='btn'>
                        <span
                            className="icon delete">
                            <DeleteIcon />
                        </span>
                    </button>
                </div>
            </li>
        </div>
    )
}