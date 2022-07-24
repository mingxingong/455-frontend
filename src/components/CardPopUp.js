import {useSelector} from 'react-redux';

export default function Popup(props) {
    const recipes = useSelector(state => state.recipes);
    console.log(recipes);
    console.log(recipes.list);
    console.log(props.index);   
    const recipe = recipes.list[props.index];
    return (
        <div className="card-pop-up">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>X</span>
                <h3>{recipe.title}</h3>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    )
}