import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSeller = createAsyncThunk("fetchSeller", async () => {
    const response = await axios.get(`http://localhost:8000/shop/getSeller`, {
        withCredentials: true,
    });
    return response.data;
});

const sellerSlice = createSlice({
    name: "seller",
    initialState: {
        isSeller: false,
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeller.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSeller.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isSeller = true;
            })
            .addCase(fetchSeller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.isSeller = false;
                state.user = null;
            });
    },
});

export default sellerSlice.reducer;
