import axios from "axios";

const API = "https://backendmedi.onrender.com/medicines";

// Fetch all medicines
export const fetchMedicines = async () => {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch (err) {
    console.error("Fetch Medicines Error:", err.message);
    throw err;
  }
};

// Add a new medicine (let JSON Server auto-generate ID)
export const addMedicine = async (medicine) => {
  try {
    const newMed = { ...medicine, taken: false }; // no id here
    const res = await axios.post(API, newMed);
    return res.data;
  } catch (err) {
    console.error("Add Medicine Error:", err.message);
    throw err;
  }
};

// Update a medicine
export const updateMedicineApi = async (id, updatedMed) => {
  try {
    const res = await axios.put(`${API}/${id}`, updatedMed);
    return res.data;
  } catch (err) {
    console.error("Update Medicine Error:", err.message);
    throw err;
  }
};

// Delete a medicine
export const deleteMedicineApi = async (id) => {
  try {
    await axios.delete(`${API}/${id}`);
    return id;
  } catch (err) {
    console.error("Delete Medicine Error:", err.message);
    throw err;
  }
};

// Toggle taken status
export const toggleTakenApi = async (medicine) => {
  try {
    const updated = { ...medicine, taken: !medicine.taken };
    const res = await axios.put(`${API}/${medicine.id}`, updated);
    return res.data;
  } catch (err) {
    console.error("Toggle Taken Error:", err.message);
    throw err;
  }
};




