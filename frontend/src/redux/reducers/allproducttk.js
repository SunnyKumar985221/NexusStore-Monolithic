import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { successAlert, errorAlert } from "../../components/Alerts/alerts";
import axios from "axios";

export const AllProducts = createAsyncThunk("allproduct", async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/product/get-all-products`);
        return response.data;
    } catch (error) {
        return errorAlert('Error While Fetching');
    }
});


const allproductSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        allproducts: null,
        error: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AllProducts.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(AllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.allproducts = action.payload;
            state.error = false;
        }).addCase(AllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.allproducts = null;
        });
    }
});
export default allproductSlice.reducer;