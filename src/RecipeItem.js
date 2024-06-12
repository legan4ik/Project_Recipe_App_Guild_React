import React from "react";
import "./App.css";



function RecipeItem({recipe, deleteRecipe}) {
return (
  <tr>
    <td>{recipe.name}</td>
    <td>{recipe.cuisine}</td>
    <td><img className="image" src={recipe.photo}></img></td>
    <td>{recipe.ingredients}</td>
    <td className="content_td"><p>{recipe.preparation}</p></td>
    <td><button name="delete" id={recipe.name} onClick={deleteRecipe}>Delete</button></td>
  </tr>
);

}

export default RecipeItem;