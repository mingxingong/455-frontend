import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import CardPopUp from './CardPopUp'
import { getRecipesAsync, deleteRecipeAsync } from '../redux/recipes/thunks';
// import {deleteCard} from '../redux/recipes/actionTypes.js'



export default function RecipeCards() {
    const [popUp, setPopUp] = useState(false);
    const [index, setIndex] = useState(-1);
    const [searchBy, setSearchBy] = useState("");

    const dispatch = useDispatch();

    let popUpIndex = null;

    function togglePopup(e, index) {
        e.preventDefault();
        setPopUp(true);
        setIndex(index);
        console.log("popUp?: " + popUp);
        console.log("popup: " + index); 
    }

    function handleClose() {
        setPopUp(false);
    }

    function handleDelete(e, id) {
        e.preventDefault();
        return dispatch(deleteRecipeAsync(id));
    }
    
    function mapRecipeToCard(recipe, index) {
        return (
            <li key={recipe.id}>
                <div 
                    className="recipe-card"
                >
                    <h3>{recipe.title}</h3>
                    <p>{recipe.ingredients}</p>
                    <p>Completion Time: {recipe.completionTime} minutes</p>
                    <input type="button" onClick={(e) => togglePopup(e, index)} value="expand"></input>
                    <input type="button" onClick={(e) => handleDelete(e, recipe.id)} value="delete"></input>
                </div>
                
            </li>
        );
    }

    function handleSearch(e) {
        e.preventDefault();
        dispatch(getRecipesAsync(searchBy));
    }


    const recipes = useSelector(state => state.recipes);
    useEffect(() => {
        dispatch(getRecipesAsync());
    }, []);
    console.log("recipes:");
    console.log(recipes);
    return (
        <div>
            {   <div>
                    <ul className="flex-container">
                        {recipes.list.map(mapRecipeToCard)}
                    </ul>
                    <label htmlFor="searchBy">Search by a recipe</label>
                    <input type="text" value={searchBy} onChange={(e) => setSearchBy(e.target.value)}/>
                    <button value="Search" onClick={(e) => handleSearch(e)}>Search</button>
                </div>
                
                
            }
                
            {popUp && 
                <CardPopUp index={index} handleClose={handleClose}></CardPopUp>
            }
        </div>
        
    );
}