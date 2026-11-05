// レシピ説明部分
import { useEffect, useRef, useState } from "react"

// 表示するレシピデータをプロップスで受け取る
const RecipeDescription = ({recipe}) => {
    // レシピ説明部分<p>を参照
    const descriptionRef = useRef(null)
    const [isOverflowing, setIsOverflowing] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect (() => {
        const element = descriptionRef.current
        if(!element || isExpanded) return
        
        const checkOverflow = () => {
            setIsOverflowing(
                element.scrollHeight > element.clientHeight
            )
        }

        checkOverflow()

        const observer = new ResizeObserver(checkOverflow)
        observer.observe(element)

        return () => observer.disconnect()
    }, [recipe.description, isExpanded])

    return (
        <div className="border border-border-tan bg-bg-ivory rounded-lg px-3 py-2 shadow">
            <h2 className="text-xl text-text-warm-brown font-semibold">レシピ説明</h2>

            <span className="block border-t border-border-tan my-2" aria-hidden="true" />

            <p  ref={descriptionRef}
                className={`text-text-brown leading-6 ${isExpanded ? "h-auto" : "h-12 overflow-hidden"}`}>
                {recipe.description}
            </p>

            <div className="h-6 flex items-center justify-center">
                {isOverflowing && (
                    <button type="button"
                            aria-expanded={isExpanded}
                            onClick={() => setIsExpanded(prev => !prev)}
                            className="text-text-gray-brown cursor-pointer underline pt-2"
                    >
                        {isExpanded? "閉じる∧" : "もっと見る∨"}
                    </button>
                )}
            </div>
            
        </div>
    )
}

export default RecipeDescription