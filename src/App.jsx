import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Singleproduct from "./pages/Singleproduct";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop">
        <Route index element={<Shop />} />
        <Route path="/shop/:id" element={<Singleproduct />} />
      </Route>
    </Routes>
  );
}

export default App;
