import searchIcon from "../assets/images/search.svg"

const RecipeSearch = () => {
    return(
        <div className="p-3 border-b border-main border-border-tan">
            <h2 className="text-xl font-semibold text-text-warm-brown">レシピを探す</h2>
            <div className="inline-flex justify-start mt-3 bg-bg-ivory border border-border-tan rounded w-9/10">
                <button
                    type="button"
                    className="cursor-pointer transition-colors hover:bg-bg-brown"
                    
                >
                    <img src={searchIcon}  className="h-7 w-7" />
                </button>
                <input
                    type="text" placeholder="レシピを検索..."
                    className="w-full"
                >
                </input>
            </div>
        </div>
    )
}
export default RecipeSearch