const RecipeSteps = ({recipe}) => {
    const steps = recipe.steps.map((step, index) => (
        <div key={index}>
            <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-orange text-text-warm-white">{index+1}</span>
                <p>{step}</p>
            </div>
            <span className="block border-t border-border-tan my-2" aria-hidden="true" />
        </div>
        
    ))

    return (
        <div className="border border-border-tan bg-bg-ivory rounded-lg px-3 pt-2 shadow">
            <h2 className="text-xl text-text-warm-brown font-semibold">作り方</h2>
            <span className="block border-t border-border-tan my-2" aria-hidden="true" />
            <div className="text-text-brown">{steps}</div>
        </div>
    )
}

export default RecipeSteps