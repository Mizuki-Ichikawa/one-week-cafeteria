import { BrowserRouter, Routes, Route } from "react-router";

import TopPage from "./pages/TopPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import MealPlanPage from "./pages/MealPlanPage";
import NutritionPage from "./pages/NutritionPage";

function App(){
  return(
    <BrowserRouter>
      <div className="h-full w-full">
        <Routes>
          {/* URLが / ならTOPページを表示 */}
          <Route path="/"
                 element={<TopPage/>}
          />
          {/* URLが /recipe なら仮の詳細ページを表示 */}
          <Route path="/recipe/:recipeId"
                 element={<RecipeDetailPage/>}
            />
          
          <Route path="meal-plan"
                 element={<MealPlanPage/>}
          />

          <Route path="/recipe/:recipeId/nutrition"
                 element={<NutritionPage/>}
          />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;