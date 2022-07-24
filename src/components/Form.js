import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {submitForm} from '../redux/recipes/actionTypes.js';
import '../App.css';
import { addRecipeAsync } from '../redux/recipes/thunks.js';



export default function Form() {
    const [title, setTitle] = useState('Your Recipe Title');
    const [ingredients, setIngredients] = useState('Your Ingredients');
    const [instructions, setInstructions] = useState('Your Instructions');
    const [completionTime, setCompletionTime] = useState(0);

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (isNaN(completionTime)) {
            alert("Completion Time must be a number!");
            return;
        }
        return dispatch(addRecipeAsync({title, ingredients, instructions, completionTime}))
    }

    function handleClear(e) {
        e.preventDefault();
        setTitle("");
        setIngredients("");
        setInstructions("");
        setCompletionTime("");
    }

    return (
        <form>
            {/* <FormTextField labelName="Title" id="title" value={title} passChildData={setTitle}></FormTextField> */}
            <label htmlFor="title">Title:</label><br/>
            <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/><br/>
            <label htmlFor="ingredients">Ingredients:</label><br/>
            <textarea id="ingredients" name="ingredients" rows="4" cols="50" value={ingredients} onChange={e => setIngredients(e.target.value)}></textarea><br/>
            <label htmlFor="instructions">Instructions:</label><br/>
            <textarea id="instructions" name="instructions" rows="4" cols="50" value={instructions} onChange={e => setInstructions(e.target.value)}></textarea><br/>
            <label htmlFor="completionTime">Completion Time:</label><br/>
            <input type="text" id="completionTime" name="completionTime" rows="4" cols="50" value={completionTime} onChange={e => setCompletionTime(e.target.value)}/><br/>
            <span>
                <button onClick={(e) => handleSubmit(e)} value="Add Recipe">Add Recipe</button>
                <button onClick={(e) => handleClear(e)} value="Clear Form">Clear Form</button>
            </span>
        </form>
        
    );
}