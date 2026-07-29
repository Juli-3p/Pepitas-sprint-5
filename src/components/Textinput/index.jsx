import "./Textinput.scss";

function TextInput({value, onChange}){
    return (
        <input

className="text-input"

value={value}

onChange={onChange}

placeholder="Nueva tarea"

/>
    );
};

export default TextInput;
