import TextInput from "../Textinput";
import Button from "../button";
import "./Taskform.scss";
import { useState } from "react";

function TaskForm({ addTask }){

    const [text, setText] = useState ("");

    const handleClick = () => {
        addTask(text);
        setText("");
    };
    return (
        <div className="task-form">
            <TextInput value={text} onChange={e => setText(e.target.value)}/>
            <Button text="+" onClick={handleClick}/>
        </div>
    );
};

export default TaskForm;