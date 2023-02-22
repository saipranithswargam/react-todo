import "./TodoForm.css";
import { useState } from "react";
const TodoForm = (props) => {
    const[userInput,SetUserInput] = useState(" ");
    const submitHandler = (event)=>{
        event.preventDefault();
        const randomval = Math.random();
        const todo = {todo:userInput,id:randomval}
        props.newTodo(todo);
        SetUserInput(" ");
    }
    const inputHandler = (event)=>{
        SetUserInput(event.target.value);
    }
    return (
        <div>
            <form className="todo-form" onSubmit={submitHandler}>
                <div className="todo-form__inner">
                    <input onChange={inputHandler} value={userInput} />
                    <button type="submit" >AddTask</button>
                </div>
            </form>
        </div>
    );
};
export default TodoForm;
