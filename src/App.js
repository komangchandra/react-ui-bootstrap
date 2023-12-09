import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import CariProduk from "./components/CariProduk";
import ProdukUnggulan from "./components/ProdukUnggulan";

function App() {
  return (
    <div>
      <CariProduk />
      <ProdukUnggulan />
      <Navigation />
    </div>
  );
}

export default App;
