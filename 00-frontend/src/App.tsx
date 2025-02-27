//Routers
import { BrowserRouter, Routes, Route } from "react-router";

//Pages
import Home from "./pages/home.tsx";
import Products from "./pages/products.tsx";
import Categories from "./pages/categories.tsx";

//Components
import Navbar from "./components/navbar.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
