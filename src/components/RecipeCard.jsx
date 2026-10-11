// レシピサムネイルのデザイン
import { tagsList } from "../data/tags.js";

// RecipeCardは、recipes.jsのrecipes配列の要素を指定して呼び出す ex) <RecipeCard recipe={recipes[0]}/>
const RecipeCard = ({ recipe }) => {
    //　レシピが持つタグたちをタグリストから抽出　O(MN) M:全体のタグ数 N:レシピ側にあるタグ数
    const recipeTags = tagsList.filter((tag) =>
        recipe.tagIds.includes(tag.id)
    );

    return (
        <article className="flex flex-col h-full min-h-0 overflow-hidden rounded-xl bg-card-background p-2 shadow-md">
            <div className="min-h-0 flex-1">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full rounded-t-lg object-cover"
                />
            </div>

            <div className="shrink-0 p-2">
                <h2 className="text-base font-bold text-primary-text">
                    {recipe.title}
                </h2>

                <div className="mt-1 flex flex-wrap items-center gap-1 text-xs text-secondary-text">
                    <p className="flex items-center">
                        <span aria-hidden="true">◷</span>
                        {recipe.cookingTime}分
                    </p>

                    {recipeTags.map((tag) => (
                        <span
                            key={tag.id}
                            className="rounded-full px-1"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default RecipeCard;