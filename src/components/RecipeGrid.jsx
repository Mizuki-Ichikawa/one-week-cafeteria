// レシピサムネイル表示部分
import RecipeCard from "./RecipeCard"
import { recipes } from "../data/recipes"

const RecipeGrid = () => {
    return (
        <article className="flex h-full min-h-0 flex-col shadow-xl p-4">
            <div className="grid grid-cols-3 grid-rows-3 min-h-0 flex-1 gap-4">
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
            </div>
            <div className="mt-4 flex shrink-0 justify-center">
                <button type="button" 
                        className="bg-bg-brown text-text-warm-white p-2 rounded-md shadow-xl 
                                   cursor-pointer transition-colors hover:bg-bg-orange"
                >
                    もっと見る ＞
                </button>
            </div>
            
        </article>
    )
}

export default RecipeGrid