
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getMedicines, updateMedicine } from "../redux/medicineSlice";
import Header from "../feature/Header";
import Footer from "../feature/Footer";

function EditMedicine() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { list, status } = useSelector((state) => state.medicines);

  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    time: "",
    notes: "",
    meridiem: "AM",
  });

  const existingMedicine = list.find((m) => m.id.toString() === id);


  useEffect(() => {
    if (list.length === 0) {
      dispatch(getMedicines());
    }
  }, [dispatch, list.length]);


  useEffect(() => {
    if (existingMedicine) setFormData({ ...existingMedicine });
  }, [existingMedicine]);

  if (status === "loading")
    return <p className="text-center text-gray-500">Loading...</p>;
  if (!existingMedicine)
    return <p className="text-center text-red-500 mt-5">Medicine not found 😕</p>;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateMedicine({ id: existingMedicine.id, updatedMed: formData }));
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="p-6 sm:p-8 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-md text-black font-bold">
          <h2 className="text-2xl font-extrabold text-center text-black mb-6">
            Edit Medicine
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Medicine name"
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              placeholder="Dosage"
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <div className="flex gap-3">
              <input
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <select
                name="meridiem"
                value={formData.meridiem}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Notes"
              rows="3"
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all w-full"
              >
                Update Medicine
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all w-full"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditMedicine;
