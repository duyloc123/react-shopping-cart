import React from "react";
import Typography from "./components/Typography";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import ImageSimple from "./components/ImageSimple";
import { userAppContext } from "./context/AppContext";
function App() {
  const { cart } = userAppContext();


  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <ImageSimple alt = "Icon" title = "Icon" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
        </div>
        <Typography component="h1" className="cardTitle" text="Our Products" />
        <ProductList />
      </div>

      <div className="card">
        <CartList />
      </div>
    </div>
  );
}

export default App;
