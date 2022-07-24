import {useState, useId} from 'react';

export default function FormTextField(props) {
    const id = useId();
    const [input, setInput] = useState(props.defaultInput);
    return (
        <div>
            <label htmlFor={id}>{props.labelName}</label>
            <input type="text" id={id} name={props.labelName} value={input} onChange={e => setInput(e.target.value)}/>
        </div>
    );
};