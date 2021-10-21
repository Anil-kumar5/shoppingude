import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { ListRender } from './ListRendering';
export const Form = ({ input, setInput, dreamToDo, setDreamToDo }) => {
    const [status, setStatus] = React.useState('all');
    const [filtered, setFiltered] = React.useState([]);
    const onInputChangeHandler = e => {
        setInput(e.target.value)
    }

    const onAddHandlerClick = e => {
        e.preventDefault();
        if(input===""){
            alert("enter something todo")
        }else{
        setDreamToDo([...dreamToDo, {
            text: input, completed: false, id: Math.random() * 10000
        }])
    }
    }
    const onSelectChange = e => {
        setStatus(e.target.value)
    }
    const onFilter = () => {

        switch (status) {
            case 'completed':
                setFiltered(dreamToDo.filter((todo) => todo.completed === true))
                break;
            case 'uncompleted':
                setFiltered(dreamToDo.filter((todo) => todo.completed === false))
                break;
            default:
                setFiltered(dreamToDo)
        }
    }
    React.useEffect(() => {
        onFilter()
    }, [status, dreamToDo])
    return (
        <div>
            <form
                className="formcontainer">
                <input
                    type="text"
                    value={input}
                    onChange={onInputChangeHandler}
                    className="inputform" />
                <button
                    onClick={onAddHandlerClick}
                    className="btnform">
                    <AddIcon />
                </button>
                <select
                    className="formselect"
                    onChange={onSelectChange}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </form>
            <ListRender dreamToDo={dreamToDo} setDreamToDo={setDreamToDo} filtered={filtered} />
        </div>
    );
}