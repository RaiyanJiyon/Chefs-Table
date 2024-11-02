import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then((response) => response.json())
            .then((jsonData) => setRecipes(jsonData))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[70%] mt-12">
            {
                recipes.map((recipe, index) => (
                    <Recipe
                        key={index} recipe={recipe}
                    />
                ))
            }
        </div>
    );
};

export default Recipes;