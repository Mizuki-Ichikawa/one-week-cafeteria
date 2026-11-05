const RecipeHeader = ({recipe, className}) => {
    // クリックされたサムネイルからIDを抽出
    const recipeName = recipe.title;
    const cookingTime = recipe.cookingTime;
    return (
        <header className={className}>
            <div className="flex-col items-center gap-10"> 
                <h1 className="text-3xl text-text-warm-brown font-bold mb-2">{recipeName}</h1>

                <span className="text-text-warm-brown font-medium pl">調理時間： {cookingTime}分</span>
            </div>
        </header>
    )
}

export default RecipeHeader