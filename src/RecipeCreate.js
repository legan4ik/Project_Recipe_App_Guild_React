import React, { useState } from "react";

import "./App.css"

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingridients, setIngridients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  
  const submitRecipe = (event) => {
    event.preventDefault();
    const newRecipe =   {
    name: name,
    cuisine: cuisine,
    photo: photo,
    ingredients: ingridients,
    preparation: preparation}
    setRecipes([...recipes, newRecipe])
    setName("");
    setCuisine("");
    setPhoto("");
    setIngridients("");
    setPreparation("");
  };
  const width = {width: "100%"};
  return (
    <form name="create" onSubmit={submitRecipe}>
      <table>
        <tbody>
          <tr>
              <td><input style={width} name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/></td>
              <td><input style={width} name="cuisine" id="cuisine" placeholder="Cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}/></td>
              <td><input style={width} name="photo" id="photo" value={photo} placeholder="URL" onChange={(e) => setPhoto(e.target.value)}/></td>
              <td><textarea style={width} name="ingredients" id="ingridients" placeholder="Ingredients" value={ingridients} onChange={(e) => setIngridients(e.target.value)}></textarea></td>
              <td><textarea style={width} name="preparation" id="preparation" placeholder="Preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)}></textarea></td>
              <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
