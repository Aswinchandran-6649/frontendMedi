
import { configureStore } from "@reduxjs/toolkit";
import medicineReducer from "./medicineSlice";


const store = configureStore({
  reducer: {
    medicines: medicineReducer,

  },
});

export default store;

