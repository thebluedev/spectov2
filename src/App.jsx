import "./App.css";
import Cursor from "./components/Cursor.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}

export default App;
