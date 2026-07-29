import Button from "../button";
import "./Taskitem.scss";

function TaskItem (){
    return (
        <li>
            <input type="checkbox" />
            <span>Aprender React</span>
            <Button text="Eliminar"/>
        </li>
    );
};

export default TaskItem;