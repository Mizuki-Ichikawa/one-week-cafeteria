import MovePage from "./MovePage"

const RecipeIngredients = ({recipe}) => {
    const ingredients = recipe.ingredients.map((ingredient, index) =>{
        {/* 単位によって表示順を変更する  */}
        let amount 
        let isSpoon = ingredient.unit === "小さじ" || ingredient.unit === "大さじ"

        if(isSpoon){ // 大さじ、小さじの時　→ 単位 量 の順 
            amount = `${ingredient.unit}${ingredient.quantity}` 
        }else if(ingredient.quantity === undefined){ // 少々,適量などのとき → 量のみ
            amount = `${ingredient.unit}`
        }else{ // 上2つ以外（個、gなど）の時 → 量 単位 の順
            amount = `${ingredient.quantity}${ingredient.unit}`   
        }

        return(
            <div key={index}>
                <div className="flex justify-between items-center px-2 py-1">
                    <span>{ingredient.name}</span>
                    <span>{amount}</span>
                </div>
                <span className="block border-t border-sub my-2"
                aria-hidden="true"></span>
            </div>
        )
    })
    
    return (
        <div className="border border-sub bg-card-background rounded-lg px-3 py-2 shadow">
            <h2 className="text-xl text-primary-text font-semibold"> 材料 {recipe.baseServings}人前</h2>
            <span className="block border-t border-sub my-2" aria-hidden="true text-description-text" />
            <div>
                {ingredients}
            </div>
            <div className="flex justify-end">
                <MovePage link={`/recipe/${recipe.id}/nutrition`} text="栄養情報を見る >"/>
            </div>
        </div>
    )
}

export default RecipeIngredients