import { useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router"

import RecipeDescription from "./RecipeDescription"
import RecipeIngredients from "./RecipeIngredients"

const RecipeOverview = ({recipe}) => {
    // 右側の要素を参照する
    const contentRef = useRef(null)

    // 最初に測った高さを保存する
    const [imageHeight, setImageHeight] = useState(null)

    useLayoutEffect(() => {
        if (!contentRef.current) return

        setImageHeight(contentRef.current.getBoundingClientRect().height)
    }, [recipe.id])

    return (
        <div className="grid grid-cols-2 items-stretch gap-6 pb-6">
            <div
                className="relative self-start overflow-hidden rounded-lg"
                style={{ height: imageHeight ?? undefined }}
            >
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div
                ref={contentRef}
                className="flex min-w-0 flex-col gap-5"
            >
                <RecipeDescription recipe={recipe}/>
                <RecipeIngredients recipe={recipe}/>

                <Link
                    to="/meal-plan"
                    className="text-text-warm-white font-medium bg-bg-brown rounded-lg p-2 block w-full text-center
                               cursor-pointer transition-colors hover:bg-bg-orange"
                >
                    献立表に追加
                </Link>
            </div>
        </div>
    )
}

export default RecipeOverview