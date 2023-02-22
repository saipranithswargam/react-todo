import TodoItem from "./TodoItem";



const TodoList = (props)=>{
    let todoList = <p>No tasks detected !</p>
    if(props.list.length===0){
        return todoList;
    }
    return <div>
    {props.list.map(todo=>{
        return(
        <TodoItem task={todo.todo} key={todo.id}/>
        )
    })}
    </div>
}

export default TodoList;