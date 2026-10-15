import { Link } from "react-router"
const RecipeDescription = ({recipe}) => {
    return (
        <div className="border border-sub bg-card-background rounded-lg px-3 py-2 shadow">
            <h2 className="text-xl text-primary-text font-semibold">レシピ説明</h2>
            <span className="block border-t border-sub my-2" aria-hidden="true" />
            <p className="text-description-text">{recipe.description}</p>
            <Link to="/meal-plan">
                <button type="button"
                        className="text-header-text font-medium bg-accent rounded-lg mt-3 p-2 block mx-auto w-[80%] 
                                    cursor-pointer transition-colors hover:bg-sub">
                            献立表に追加
                </button>
            </Link>
        </div>
    )
}

export default RecipeDescription