import { useParams } from "react-router"

import { recipes } from "../data/recipes"

import Header from "../components/Header"
import MovePage from "../components/MovePage"
import RecipeHeader from "../components/RecipeHeader"
import RecipeOverview from "../components/RecipeOverview"
import RecipeDescription from "../components/RecipeDescription"
import RecipeIngredients from "../components/RecipeIngredients"

const RecipeDetailPage = ({}) => {
    // URLからレシピIDを取得
    const { recipeId } = useParams();
    
    const recipe = recipes.find(
        (item) => item.id === Number(recipeId)
    )

    if(!recipe){
        return <p>レシピが見つかりません。</p>
    }
    
    return (
        <div className="h-dvh bg-background font-sans">
            <div className="shrink-0">
                <Header/>
            </div>
            <div className="mt-3 mx-5">
                <MovePage link="/" text="< TOPへ戻る"/>

                <RecipeHeader recipe={recipe} className="mt-5 mb-3"/>

                <div className="grid grid-cols-2 h-dvh">
                    <div className="row-span-2">
                        <img 
                            src={recipe.image}
                            className="h-full w-full"
                        />
                    </div>
                    
                    <div>
                        <RecipeOverview recipe={recipe}/>
                        <RecipeIngredients recipe={recipe}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecipeDetailPage