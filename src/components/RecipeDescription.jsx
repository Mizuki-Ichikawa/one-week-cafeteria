import { Link } from "react-router"
const RecipeDescription = ({recipe}) => {
    return (
        <div className="border border-border-tan bg-bg-ivory rounded-lg px-3 py-2 shadow">
            <h2 className="text-xl text-text-warm-brown font-semibold">レシピ説明</h2>
            <span className="block border-t border-border-tan my-2" aria-hidden="true" />
            <p className="text-text-brown">{recipe.description}</p>
            <Link to="/meal-plan">
                <button type="button"
                        className="text-text-warm-white font-medium bg-bg-brown rounded-lg mt-3 p-2 block mx-auto w-[80%] 
                                    cursor-pointer transition-colors hover:bg-bg-orange">
                            献立表に追加
                </button>
            </Link>
        </div>
    )
}

export default RecipeDescription