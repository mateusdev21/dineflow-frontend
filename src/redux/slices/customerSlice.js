import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId: "",
    customerName: "",
    customerPhone: "",
    pax: 0,
    tableNo: "",
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomer: (state, action) => {
            const { name, phone, pax } = action.payload;
            state.orderId = `${Date.now()}`; // Generate a unique order ID based on timestamp
            state.customerName = name;
            state.customerPhone = phone;
            state.pax = pax;
        },

        removeCustomer: (state) => {
            state.customerName = "";
            state.customerPhone = "";
            state.pax = 0;
            state.tableNo = "";
        },

        updateTable: (state, action) => {
            state.tableNo = action.payload.tableNo;
        },
    },
});

export const { setCustomer, removeCustomer, updateTable } = customerSlice.actions;
export default customerSlice.reducer;