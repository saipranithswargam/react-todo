import TodoForm from "./components/TodoInput/TodoForm";
import TodoList from "./components/TodoItems/TodoList";
import { useState } from "react";
import "./index.css";
const dummyList = [{todo:"this is sample todo item",id:1}];
function App() {
    const [todoList, updateTodoList] = useState(dummyList);

    const newTodoItem = (todo) => {
        console.log(todo);
        updateTodoList((prevState)=>{
          return [todo,...prevState];
        })
    };
    return (
        <div className="main">
            <div className="main__app">
                <TodoForm newTodo={newTodoItem} />
                <TodoList list={todoList}/>
            </div>
        </div>
    );
}

export default App;
