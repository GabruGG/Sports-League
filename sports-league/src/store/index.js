import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import leagueReducer from "./slices/leagueSlice";
export const store = configureStore({
  reducer: { filters: filterReducer, leagues: leagueReducer },
});
