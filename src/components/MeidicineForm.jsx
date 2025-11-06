import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMedicine } from "../redux/medicineSlice";
import { useNavigate, Link } from "react-router-dom";
import Header from "../feature/Header";
import Footer from "../feature/Footer";

function MedicineForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    time: "",
    notes: "",
    meridiem: "AM",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.time) {
      alert("Please fill all required fields");
      return;
    }

    dispatch(createMedicine(formData));
    setFormData({ name: "", dosage: "", time: "", notes: "", meridiem: "AM" });
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center p-20">
        <div className="p-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg mb-4 w-100">
          <h2 className="text-lg font-bold mb-2 text-black text-center">Add Medicine</h2>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <input
              name="name"
              placeholder="Medicine Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded p-2"
            />
            <input
              name="dosage"
              placeholder="Dosage (e.g. 500mg)"
              value={formData.dosage}
              onChange={handleChange}
              className="border rounded p-2"
            />
            <input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className="border rounded p-2"
            />
            <select
              name="meridiem"
              value={formData.meridiem}
              onChange={handleChange}
              className="border rounded p-2"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            <input
              name="notes"
              placeholder="Notes (e.g. after meal)"
              value={formData.notes}
              onChange={handleChange}
              className="border rounded p-2"
            />

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <button type="submit" className="bg-blue-600 text-white py-2 px-5 rounded hover:bg-blue-700 w-full sm:w-auto">
                Add Medicine
              </button>

              <Link to="/">
                <button className="bg-yellow-500 text-white py-2 px-5 rounded hover:bg-yellow-700 w-full sm:w-auto">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MedicineForm;



