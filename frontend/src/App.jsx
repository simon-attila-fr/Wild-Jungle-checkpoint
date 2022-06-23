import Banner from "@components/Banner/Banner";
import Footer from "@components/Footer/Footer";
import PlantDetail from "@pages/PlantDetail/PlantDetail";
import PlantAdd from "@pages/PlantAdd/PlantAdd";
import PlantList from "@pages/PlantList/PlantList";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="wj-layout">
      <Banner />

      <main>
        <Routes>
          <Route path="/" element={<PlantList />} />
          <Route path="/plants/add" element={<PlantAdd />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
