import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMedicines } from "../redux/medicineSlice";
import MedicineCard from "./MedicineCard";
import { Link } from "react-router-dom";
import Header from "../feature/Header";
import Footer from "../feature/Footer";
import DashboardBanner from "../feature/DashboardBanner";

function MedicineList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.medicines);

  useEffect(() => {
    dispatch(getMedicines());
  }, [dispatch]);

  if (status === "loading")
    return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <>
      <Header />
      <DashboardBanner />

      <div className="p-4 grid gap-4">
        {list.length > 0 ? (
          list.map((med) => <MedicineCard key={med.id} medicine={med} />)
        ) : (
          <div className="flex justify-center">
            <p className="text-center text-gray-500">
              <img
                className="w-100 rounded-4xl"
                src="https://media.tenor.com/images/8eb00d7f8429c4b06e29a2ad217dc10d/tenor.gif"
                alt="No medicines"
              />
            </p>
          </div>
        )}

        <div className="flex justify-center mt-4">
          <Link
            to="/form"
            className="bg-green-500 text-black px-4 py-2 rounded font-bold hover:bg-green-600 transition"
          >
            + Add Medicine
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MedicineList;


