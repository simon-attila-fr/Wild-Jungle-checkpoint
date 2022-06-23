import Banner from "@components/Banner/Banner";
import Footer from "@components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="wj-layout">
      <Banner />

      <main>{/** Ajouter un système de routing ici */}</main>

      <Footer />
    </div>
  );
}

export default App;
