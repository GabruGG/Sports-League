import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const badgeCache = {};

export const fetchLeagues = createAsyncThunk("leagues/fetch", async () => {
  const { data } = await axios.get(
    "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
  );
  return data.leagues;
});

export const fetchBadge = createAsyncThunk(
  "leagues/fetchBadge",
  async (leagueId) => {
    if(badgeCache[leagueId]){
      return  { ...badgeCache[leagueId], cached: true };
    }
    const { data } = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${leagueId}`
    );
    const badge = data.seasons?.[0]?.strBadge || null;
    badgeCache[leagueId] = {badge}
    return { badge, cached: false };
  }
);

const leaguesSlice = createSlice({
  name: "leagues",
  initialState: {
    data: [],
    status: "",
    leagueListError: null,
    sportTypes: [],
    selectedLeague: null,
    selectedBadge: null,
    badgeStatus: "idle",
    badgeError: null,
  },
  reducers: {
    selectLeague: (state, action) => {
      state.selectedLeague = action.payload;
      state.selectedBadge = null;
      state.badgeStatus = "";
      state.badgeError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.sportTypes = [...new Set(action.payload.map((l) => l.strSport))];
      })
      .addCase(fetchLeagues.rejected, (state, action) => {
        state.status = "failed";
        state.leagueListError = action.error.message;
      })
      // badge cases
      .addCase(fetchBadge.pending, (state) => {
        state.badgeStatus = "loading";
        state.badgeError = null;
      })
      .addCase(fetchBadge.fulfilled, (state, action) => {
        state.badgeStatus = "succeeded";
        state.selectedBadge = action.payload.badge;
      })
      .addCase(fetchBadge.rejected, (state, action) => {
        state.badgeStatus = "failed";
        state.badgeError = action.error.message;
      });
  },
});

export const { selectLeague } = leaguesSlice.actions;
export default leaguesSlice.reducer;
