import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  const APP_ID = "a611f797";
  const APP_KEY = "4118917f1418f9e1dab5d43735b2959d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories-591-722&health-alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Main
        recipes={recipes}
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
      />
    </div>
  );
}

export default App;
