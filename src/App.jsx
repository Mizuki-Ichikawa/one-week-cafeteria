import { BrowserRouter, Routes, Route } from "react-router";
//import { useParams } from "react-router";

import TopPage from "./pages/TopPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

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
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;