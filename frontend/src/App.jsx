import Banner from "@components/Banner/Banner";
import Footer from "@components/Footer/Footer";
import PlantAdd from "@pages/PlantAdd/PlantAdd";
import PlantDetail from "@pages/PlantDetail/PlantDetail";
import PlantList from "@pages/PlantList/PlantList";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="wj-layout">
      <Banner />
      <main>
        {/** Ajouter un système de routing ici */}
        <Routes>
          <Route path="/" element={<PlantList />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
          <Route path="/plants/add" element={<PlantAdd />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
