// レシピサムネイルのデザイン
import { Link } from "react-router";
import { tagsList } from "../data/tags.js";

const RecipeCard = ({ recipe }) => {
    const recipeTags = tagsList.filter((tag) =>
        recipe.tagIds.includes(tag.id)
    );

    return (
        <Link
            to={`/recipe/${recipe.id}`}
            className="block h-full min-h-0 min-w-0"
        >
            <article
                className="flex h-full min-h-0 flex-col overflow-hidden
                           rounded-xl bg-bg-ivory p-2 shadow-md
                           transision-[translate,tansform,box-shadow] duration-300 ease-out
                           hover:-translate-y-1 hover:shadow-xl"
            >
                {/* 画像：タイトルやタグの量に左右されない領域 */}
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-t-lg">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <div className="shrink-0 min-w-0 p-2">
                    {/* タイトル：常に2行分を確保 */}
                    <h2
                        className="h-12 line-clamp-2 break-words
                                   text-base leading-6 font-bold
                                   text-text-warm-brown"
                    >
                        {recipe.title}
                    </h2>

                    {/* 調理時間・タグ：常に1行分を確保 */}
                    <div
                        className="mt-1 flex h-4 items-center gap-1
                                   text-xs leading-4 text-text-gray-brown"
                    >
                        <p className="flex shrink-0 items-center whitespace-nowrap">
                            <span aria-hidden="true">◷</span>
                            {recipe.cookingTime}分
                        </p>

                        {/* 2行目に回ったタグは表示しない */}
                        <div
                            className="flex h-4 min-w-0 flex-1 flex-wrap
                                       gap-x-1 gap-y-1 overflow-hidden"
                        >
                            {recipeTags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="block h-4 max-w-full shrink-0
                                               truncate rounded-full px-1"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default RecipeCard;