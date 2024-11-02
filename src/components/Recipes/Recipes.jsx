import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({ handleCook }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then((response) => response.json())
            .then((jsonData) => setRecipes(jsonData))
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-[70%] mt-12">
            {
                recipes.map((recipe, index) => (
                    <Recipe
                        key={index} 
                        recipe={recipe}
                        handleCook={handleCook}
                    />
                ))
            }
        </div>
    );
};

Recipes.propTypes = {
    handleCook: PropTypes.func.isRequired
}

export default Recipes;