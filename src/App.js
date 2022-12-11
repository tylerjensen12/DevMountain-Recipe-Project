import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from '../src/components/homeComponents/HomeScreen'
import NewRecipe from '../src/components/newRecipeComponents/NewRecipeScreen'
import DetailScreen from '../src/components/detailComponents/DetailScreen'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen/>}/>
        <Route path='newrecipe' element={<NewRecipe/>}/>
        <Route path='/recipe/:id' element={<DetailScreen/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
