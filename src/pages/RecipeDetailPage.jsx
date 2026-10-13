import { useParams } from "react-router"

import Header from "../components/Header"
import MovePage from "../components/MovePage"
import RecipeHeader from "../components/RecipeHeader"
import RecipeOverview from "../components/RecipeOverview"
import RecipeDescription from "../components/RecipeDescription"
import RecipeIngredients from "../components/RecipeIngredients"

const RecipeDetailPage = ({}) => {
    // URLからレシピIDを取得
    const { recipeId } = useParams();
    
    return (
        <div className="h-dvh bg-background font-sans">
            <div className="shrink-0">
                <Header/>
            </div>
            <div className="mt-3 mx-5">
                <MovePage link="/" text="< TOPへ戻る"/>
                <RecipeHeader/>
                <div className="grid grid-cols-2">
                    <div>
                        <img className="border-2"/>
                    </div>
                    <div>
                        <RecipeOverview/>
                        <RecipeIngredients/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetailPage