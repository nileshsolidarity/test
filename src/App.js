import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Carts from "./pages/cart/Carts";
import Header from "./pages/header/header";
import Description from "./pages/description/Description";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar />
                <Header />
              </>
            }
          />
          <Route
            exact
            path="/products/:productId"
            element={
              <>
                <NavBar />
                <Description />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <NavBar />
                <Carts />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
