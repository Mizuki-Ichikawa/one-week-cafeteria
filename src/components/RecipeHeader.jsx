import { recipes } from "../data/recipes";

const RecipeHeader = () => {
    // クリックされたサムネイルからIDを抽出
    const recipeName = "";
    const cookingTime = "調理時間：";
    return (
        <header>
            <div className="flex border-2">
                <h1 className="text-2xl text-primary-text font-bold">{recipeName}</h1>
                <span className="text-sm text-sub">{cookingTime}</span>
            </div>
        </header>
    )
}

export default RecipeHeader