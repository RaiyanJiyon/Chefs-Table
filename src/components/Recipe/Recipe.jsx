import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
    console.log(recipe);

    return (
        <div className="card border border-[#e0e0e2]">
            <figure className="p-4">
                <img
                    src={recipe.recipe_image}
                    alt="Shoes"
                    className="rounded-xl object-fill w-full h-[200px]"
                />
            </figure>
            <div className="card-body items-center w-11/12 mx-auto p-0">
                <h2 className="card-title w-full text-left">{recipe.recipe_name}</h2>
                <p className='text-[#878787] text-sm font-normal'>{recipe.short_description}</p>
                <div className='divider'></div>
                <h3 className='w-full'>ingredients: {recipe.ingredients.length}</h3>
                <div className='w-full text-[#878787]'>

                    {
                        recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    }
                </div>
                <div className='divider'></div>

                <div className='flex justify-start items-center gap-4 w-full'>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>{recipe.preparing_time}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                        <p>{recipe.calories}</p>
                    </div>
                </div>

                <div className='w-full mt-5 pb-6'>
                    <button className="btn bg-[#0BE58A] rounded-[50px] border-none">Want to Cock</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;