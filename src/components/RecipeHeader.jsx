const RecipeHeader = ({recipe, className}) => {
    // クリックされたサムネイルからIDを抽出
    const recipeName = recipe.title;
    const cookingTime = recipe.cookingTime;
    return (
        <header className={className}>
            <div className="flex items-center gap-10"> 
                <h1 className="text-3xl text-text-warm-brown font-bold">{recipeName}</h1>

                <span
                    className="h-6 w-px shrink-0 bg-border-tan"
                    aria-hidden="true"
                />
                <span className="text-text-warm-brown font-semibold">調理時間： {cookingTime}分</span>
            </div>
        </header>
    )
}

export default RecipeHeader