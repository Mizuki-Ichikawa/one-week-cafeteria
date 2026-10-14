import RecipeDescription from "./RecipeDescription"
import RecipeIngredients from "./RecipeIngredients"

const RecipeOverview = ({recipe}) => {
    return(
        <div className="grid grid-cols-2 items-stretch gap-6 pb-6">
            <div className="relative overflow-hidden rounded-lg">
                <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            
            <div className="flex min-w-0 flex-col gap-5">
                <RecipeDescription recipe={recipe}/>
                <RecipeIngredients recipe={recipe}/>
            </div>
        </div>
    )
}

export default RecipeOverview