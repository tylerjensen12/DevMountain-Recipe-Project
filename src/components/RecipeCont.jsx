import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";
import style from './Recipe.module.css'

const RecipeCont = ({ recipes }) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return <RecipeCard key={recipe.recipe_id} recipe={recipe} />;
    });

  return (
    <div>
      <span className={style.search}>
        <BiSearchAlt2 size="2em" color="#DA7635" className={style.search_btn} />
        <input
          className={style.search_in}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={style.recipe_cont}>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes</h2>}
      </div>
    </div>
  );
}

export default RecipeCont;
