import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const response = await axios.get(`http://localhost:8000/user/getuser`, {
        withCredentials: true,
    });
    return response.data.user;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.isAuthenticated = false;
                state.user = null;
            });
    },
});

export default userSlice.reducer;
