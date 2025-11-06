import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMedicines,
  addMedicine,
  updateMedicineApi,
  deleteMedicineApi,
  toggleTakenApi,
} from "../server/medicineApi"

// Fetch all medicines
export const getMedicines = createAsyncThunk(
  "medicines/getMedicines",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchMedicines();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create new medicine
export const createMedicine = createAsyncThunk(
  "medicines/createMedicine",
  async (medicineData, { rejectWithValue }) => {
    try {
      return await addMedicine(medicineData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update medicine
export const updateMedicine = createAsyncThunk(
  "medicines/updateMedicine",
  async ({ id, updatedMed }, { rejectWithValue }) => {
    try {
      return await updateMedicineApi(id, updatedMed);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete medicine
export const deleteMedicine = createAsyncThunk(
  "medicines/deleteMedicine",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteMedicineApi(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Toggle taken status
export const toggleTaken = createAsyncThunk(
  "medicines/toggleTaken",
  async (medicine, { rejectWithValue }) => {
    try {
      return await toggleTakenApi(medicine);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const medicineSlice = createSlice({
  name: "medicines",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMedicines.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMedicines.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(getMedicines.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createMedicine.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateMedicine.fulfilled, (state, action) => {
        const index = state.list.findIndex((m) => m.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteMedicine.fulfilled, (state, action) => {
        state.list = state.list.filter((m) => m.id !== action.payload);
      })
      .addCase(toggleTaken.fulfilled, (state, action) => {
        const index = state.list.findIndex((m) => m.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default medicineSlice.reducer;





