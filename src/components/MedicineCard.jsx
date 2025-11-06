import React from "react";
import { useDispatch } from "react-redux";
import { deleteMedicine, toggleTaken } from "../redux/medicineSlice";
import { Link } from "react-router-dom";

function MedicineCard({ medicine }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-linear-to-br from-blue-100/90 to-cyan-50/90 backdrop-blur-md rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col md:flex-row justify-between items-start md:items-center">

      <div className="flex-1">
        <h3 className="text-3xl font-extrabold text-black mb-8">{medicine.name}</h3>
        <p className="text-gray-700 mb-1 text-xl">
          <span className="font-bold text-blue-700 text-xl">💊 Dosage:</span> {medicine.dosage}
        </p>
        <p className="text-red-600 mb-1 font-bold text-xl">
          <span className="font-semibold text-blue-900 text-xl">⏰ Time:</span> {medicine.time} {medicine.meridiem}
        </p>
        {medicine.notes && (
          <p className="text-green-600 italic mt-1 text-2xl">📝 {medicine.notes}</p>
        )}
        <p className="mt-3 text-lg">
          {medicine.taken ? (
            <span className="text-green-600 font-semibold">✅ Taken</span>
          ) : (
            <span className="text-gray-600">❌ Not Taken</span>
          )}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 md:mt-0">
        <button
          onClick={() => dispatch(toggleTaken(medicine))}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-xl shadow-sm transition-all duration-200"
        >
          Mark {medicine.taken ? "Untaken" : "Taken"}
        </button>

        <Link
          to={`/edit/${medicine.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl shadow-sm transition-all duration-200"
        >
          Edit
        </Link>

        <button
          onClick={() => dispatch(deleteMedicine(medicine.id))}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl shadow-sm transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MedicineCard;






