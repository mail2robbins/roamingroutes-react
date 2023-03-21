import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTour: {
    title: "",
    location: "",
    image: "",
  },
  isloading: false,
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setTour: (store, action) => {
      //console.log("store", store, "action", action);
      store.selectedTour.title = action.payload.title;
      store.selectedTour.location = action.payload.location;
      store.selectedTour.image = action.payload.image;
    },
  },
});

export const { setTour } = tourSlice.actions;

export default tourSlice.reducer;
