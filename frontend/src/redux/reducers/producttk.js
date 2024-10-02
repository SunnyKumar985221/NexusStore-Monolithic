import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { successAlert, errorAlert } from "../../components/Alerts/alerts";

export const CreateNewProduct = createAsyncThunk("product", async (data) => {
    try {
        const config = { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true };
        const response = await axios.post(`http://localhost:8000/product/create-product`, data, config);
        successAlert('Product Added Successfully');
        return null;
    } catch (error) {
        return errorAlert('Product Not Added');
    }
});

export const GetAllProducts = createAsyncThunk("allproducts", async (id) => {
    try {
        const config = { headers: { withCredentials: true } };
        const response = await axios.get(`http://localhost:8000/product/get-all-products-shop/${id}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        return errorAlert('Error While Fetching');
    }
});

export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8000/product/delete-shop-product/${id}`, { withCredentials: true });
        return null;
    } catch (error) {
        return errorAlert('Error While Fetching');
    }
});


const productSlice = createSlice({
    name: "product",
    initialState: {
        isSuccess: false,
        loading: false,
        data: null,
        error: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(CreateNewProduct.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(CreateNewProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.isSuccess = true;
            state.error = false;
        }).addCase(CreateNewProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = null;
            state.isSuccess = false;
        }).addCase(GetAllProducts.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(GetAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.isSuccess = true;
            state.error = false;
        }).addCase(GetAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = null;
            state.isSuccess = false;
        }).addCase(deleteProduct.pending, (state) => {
            state.error = false;
        }).addCase(deleteProduct.fulfilled, (state, action) => {
            state.data = null;
            state.isSuccess = true;
            state.error = false;
        }).addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = null;
            state.isSuccess = false;
        });
    }
});
export default productSlice.reducer;