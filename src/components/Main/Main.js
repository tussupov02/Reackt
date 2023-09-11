import AddRecipe from "../AddRecipe/AddRecipe";
import Form from "../Form/Form";

export default function Main({ recipes, getSearch, search, updateSearch }) {
  return (
    <div className="main">
      <Form getSearch={getSearch} search={search} updateSearch={updateSearch} />
      <AddRecipe recipes={recipes}/>
    </div>
  );
}
