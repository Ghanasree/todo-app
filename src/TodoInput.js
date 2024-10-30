import React, { useState } from "react";

function TodoInput({ addTodo }) {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim()) {
            addTodo(input);
            setInput("");
        }
    };

    return (
        <div className="todo-input-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TodoInput;
