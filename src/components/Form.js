import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHendler = (e) =>{
        
        setInputText(e.target.value)
    }

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed: false, id: Math.random() * 1000  }
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHendler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>

                </select>
            </div>
        </form>
    );
}

export default Form;