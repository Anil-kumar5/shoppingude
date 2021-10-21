import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import List from "./List";
export function Form() {
    const [input, setInput] = React.useState('');
    const [todo, setTodo] = React.useState([]);
    const [status, setStatus] = React.useState('all');
    const [filtered, setFiltered] = React.useState([]);
    const onInputHandler = e => {
        setInput(e.target.value)
    }
    const onClickHandler = e => {
        e.preventDefault();
        setTodo([...todo,
        { text: input, completed: false, id: Math.random() * 1000 }
        ]);
        setInput("");
    }

    const onSelectChange = e => {
        setStatus(e.target.value)
    }

    const filteredToDos = () => {
        switch (status) {
            case 'completed':
                setFiltered(todo.filter((todos) => todos.completed === true))
                break;
            case 'uncompleted':

                setFiltered(todo.filter((todos) => todos.completed === false))
                break;
            default:
                setFiltered(todo)
                break;
        }
    }
    React.useEffect(() => {
        filteredToDos();

    }, [todo, status])
    return (
        <div>
            <form
                className="container">
                <input
                    type="text"
                    name="text-name" onChange={onInputHandler} value={input} />
                <button className="btn" type="submit" onClick={onClickHandler}>
                    <AddIcon />
                </button>
                <div className="slect">
                    <select className="todos" onChange={onSelectChange}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <List todo={todo} setTodo={setTodo} filtered={filtered} />

        </div>
    )
}