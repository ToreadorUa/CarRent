import { Route, Routes } from "react-router-dom"
import { Layout } from "./Components/Layout/Layout"
import { Main } from "./pages/Main/Main"
import { Catalog } from "./pages/Main/Catalog/Catalog"
import { Favorites } from "./pages/Main/Favorites/Favorites"

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element= {<Favorites/>} />
          </Route>
      </Routes>
   
      
      
    </>
  )
}

export default App
