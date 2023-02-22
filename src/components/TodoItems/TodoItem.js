import Card from "../UI/Card";
import "./TodoItem.css";
const TodoItem = (props) => {
    return (
        <Card>
            <div className="todo">
                <p>{props.task}</p>
            </div>
        </Card>
    );
};

export default TodoItem;
