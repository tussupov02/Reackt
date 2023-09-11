import "./Recipe.css";
export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories.toFixed()}</p>
      <img src={image} alt="" />
    </div>
  );
}
