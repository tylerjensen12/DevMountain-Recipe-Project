import React from "react";
import { useNavigate } from "react-router-dom";
import style from './Recipe.module.css'

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className={style.recipe_card}>
      <div className={style.img}>
        <img src={recipe.image_url} alt="" />
      </div>
      <h2 className={style.recipe_title}>{recipe.recipe_name}</h2>
      <button className="blue-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
