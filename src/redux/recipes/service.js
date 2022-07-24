const URLBeginning = "https://powerful-thicket-82370.herokuapp.com/";
const addRecipe = async (recipe) => {
    const response = await fetch(`${URLBeginning}recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe),
      mode: 'cors'
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
    return data;
  };
  
  const getRecipes = async (searchBy) => {
    const response = await fetch(`${URLBeginning}recipes?searchBy=${searchBy}`, {
      method: 'GET',
      mode: 'cors'
    });
    return response.json();
  };
  
  const deleteRecipe = async(id) => {
    const response = await fetch(`${URLBeginning}recipes`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id}),
        mode: 'cors'
    });

    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
    return data;
  };


  export default {
    addRecipe,
    getRecipes,
    deleteRecipe
  };
