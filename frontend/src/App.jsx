import Banner from "@components/Banner";
import Footer from "@components/Footer";
import PlantDetail from "@components/PlantDetail";
import PlantAdd from "@pages/PlantAdd";
import PlantList from "@pages/PlantList";
import { Routes, Route } from "react-router-dom";

import "./styles/index.css";
import "./styles/Layout.css";

function App() {
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Routes>
          <Route path="/" element={<PlantList />} />
          <Route path="/plants/add" element={<PlantAdd />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
