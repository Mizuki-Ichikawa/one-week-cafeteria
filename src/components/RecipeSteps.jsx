const RecipeSteps = ({recipe}) => {
    const steps = recipe.steps.map((step, index) => (
        <div key={index}>
            <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-card-background">{index+1}</span>
                <p>{step}</p>
            </div>
            <span className="block border-t border-sub my-2" aria-hidden="true" />
        </div>
        
    ))

    return (
        <div className="border border-sub bg-card-background rounded-lg px-3 pt-2 shadow">
            <h2 className="text-xl text-primary-text font-semibold">作り方</h2>
            <span className="block border-t border-sub my-2" aria-hidden="true" />
            <div>{steps}</div>
        </div>
    )
}

export default RecipeSteps