import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { search: '', sport: 'All' },
  reducers: {
    setSearch: (state, action) => { state.search = action.payload; },
    setSport:  (state, action) => { state.sport  = action.payload; },
  },
});

export const { setSearch, setSport } = filterSlice.actions;
export default filterSlice.reducer;
