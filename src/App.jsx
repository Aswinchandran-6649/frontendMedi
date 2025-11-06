import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MedicineForm from "./components/MeidicineForm";
import MedicineList from "./components/MedicineList";
import EditMedicine from "./components/EditMedicine";
import Preloader from "./feature/Preloader";

import Pnf from "./components/pnf";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Pnf />} />

        {/* Protected routes */}
        <Route path="/" element={loading ? <Preloader /> : <MedicineList />} />
        <Route path="/form" element={<MedicineForm />} />
        <Route path="/edit/:id" element={<EditMedicine />} />
      </Routes>
    </div>
  );
}

export default App;
