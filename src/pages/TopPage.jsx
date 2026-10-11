import Header from "../components/Header"
import RecipeGrid from "../components/RecipeGrid"
import RecipeSearch from "../components/RecipeSearch"
import TodayMenu from "../components/TodayMenu"
import TagList from "../components/TagList"

const TopPage = () => {
    return(
        <div className="flex flex-col h-dvh bg-background font-sans">
            <div className="shrink-0">
                <Header/>
            </div>
            
            <div className="grid grid-cols-[2fr_1fr] gap-4 min-h-0 flex-1">
                <div className="min-h-0 min-w-0">
                    <RecipeGrid/>
                </div>
                <div className="grid grid-rows-[1fr_2fr_3fr] min-h-0 min-w-0 shadow-xl">
                    <RecipeSearch/>
                    <TodayMenu/>
                    <TagList/>
                </div>
            </div>
        </div>
    )
}

export default TopPage