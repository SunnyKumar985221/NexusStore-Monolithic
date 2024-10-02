import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorAlert } from "../../components/Alerts/alerts";

import axios from "axios";
export const createEvent = createAsyncThunk('addEvent', async (data) => {
    try {
        const config = { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true };
        const response = await axios.post('http://localhost:8000/event/create-event', data, config);
        return null;
    } catch (error) {
        errorAlert('Event Not Created');
    }
});

export const GetAllEvents = createAsyncThunk('allEvent', async (id) => {
    try {
        const config = { withCredentials: true };
        const response = await axios.get(`http://localhost:8000/event/get-all-events/${id}`, config);
        return response.data;
    } catch (error) {
        errorAlert('Event Not Created');
    }
});

const eventSlice = createSlice({
    name: "event",
    initialState: {
        loading: false,
        eventproduct: null,
        error: false
    },
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(createEvent.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(createEvent.fulfilled, (state, actions) => {
            state.loading = false;
            state.eventproduct = actions.payload;
            state.error = false;
        }).addCase(createEvent.rejected, (state, actions) => {
            state.loading = false;
            state.eventproduct = null;
            state.error = actions.error.message;
        }).addCase(GetAllEvents.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(GetAllEvents.fulfilled, (state, actions) => {
            state.loading = false;
            state.eventproduct = actions.payload;
            state.error = false;
        }).addCase(GetAllEvents.rejected, (state, actions) => {
            state.loading = false;
            state.eventproduct = null;
            state.error = actions.error.message;
        });
    }
})

export default eventSlice.reducer;