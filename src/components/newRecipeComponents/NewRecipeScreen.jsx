import React, { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import style from "./NewRecipe.module.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const ingredientsDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section className={style.new}>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={style.inputs}>
              <input
                type="text"
                placeholder="Recipe Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className={style.radios}>
              <span>
                <input
                  className={style.radio}
                  type="radio"
                  name="type"
                  value="Cook"
                  onChange={handleChange}
                />
                <h5>Cook</h5>
              </span>
              <span>
                <input
                  className={style.radio}
                  type="radio"
                  name="type"
                  value="Bake"
                  onChange={handleChange}
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input
                  className={style.radio}
                  type="radio"
                  name="type"
                  value="Drink"
                  onChange={handleChange}
                />
                <h5>Drink</h5>
              </span>
            </div>
            <div className={style.inputs}>
              <input
                className={style.info}
                type="text"
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                className={style.info}
                type="text"
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                className={style.info}
                type="text"
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <div className={style.ingredients}>
              <div className={style.ingred}>
                <input
                  className={style.inputs}
                  type="text"
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={style.inputs}
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul>{ingredientsDisplay}</ul>
            </div>
            <button type="button" className={style.orbtn} onClick={addIngredient}>
              Add Another
            </button>
            <textarea
              placeholder="Instructions..."
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button type="submit" className="blue-btn">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
