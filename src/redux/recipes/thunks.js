import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import RecipeService from './service';

export const getRecipesAsync = createAsyncThunk(
  actionTypes.GET_RECIPES,
  async (searchBy) => {
    return await RecipeService.getRecipes(searchBy);
  }
);

export const addRecipeAsync = createAsyncThunk(
  actionTypes.ADD_RECIPE,
  async (recipe) => {
    return await RecipeService.addRecipe(recipe);
  }
);

export const deleteRecipeAsync = createAsyncThunk(
    actionTypes.DELETE_RECIPE,
    async (id) => {
        return await RecipeService.deleteRecipe(id);
    }
)