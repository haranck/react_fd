import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let saved = []
try {
    const data = localStorage.getItem('users')
    saved = data ? JSON.parse(data):[]
} catch (error) {
    console.log(error)
    saved = []
}

const initialState = {
  users: Array.isArray(saved) ? saved : [],
  loading: false,
  error: null,
};

export const FetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.users = state.users.filter((_, i) => i !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        localStorage.setItem("users", JSON.stringify(state.users));
      })
      .addCase(FetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { removeItem } = userSlice.actions;
