import React from "react";

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
    return (
        <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
            {todo.text}
            <div>
                <button className="complete-btn" onClick={() => toggleComplete(index)}>
                    {todo.isCompleted ? "Undo" : "Complete"}
                </button>
                <button className="delete-btn" onClick={() => deleteTodo(index)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
