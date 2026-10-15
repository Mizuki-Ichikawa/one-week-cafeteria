import { useParams } from "react-router"

import { recipes } from "../data/recipes"

import Header from "../components/Header"
import MovePage from "../components/MovePage"
import RecipeHeader from "../components/RecipeHeader"
import RecipeOverview from "../components/RecipeOverview"
import RecipeSteps from "../components/RecipeSteps"

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
        <div className="min-h-dvh bg-bg-cream font-sans pb-10">
            <div className="shrink-0">
                <Header/>
            </div>
            <div className="mt-3 mx-5">
                <MovePage link="/" text="< TOPへ戻る"/>

                <RecipeHeader recipe={recipe} className="mt-5 mb-3"/>

                <RecipeOverview recipe={recipe}/>

                <RecipeSteps recipe={recipe}/>
            </div>
        </div>
    )
}

export default RecipeDetailPage