import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from './Detail.module.css'

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);
  return (
    <section>
      <div style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        display: 'flex',
        justifyContent: 'center',
        height: '400px',
      }}>
        <h1 className={style.title}>{recipe.recipe_name}</h1>
      </div>
      <div className={style.detail}>
        <div className={style.recipe}>
          <h2 className={style.h2}>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2 className={style.h2}>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ingred, index) => {
              return (
                <h4>
                  {ingred.quality} {ingred.ingredients}
                </h4>
              );
            })}
        </div>
        <div className={style.instr}>
          <h2 className={style.h2}>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
