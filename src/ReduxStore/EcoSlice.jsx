import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const categoryProduct = createAsyncThunk("categoryProduct" , async () => {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/categories`)
        return await res.data
  })

const ecommerce = createSlice({
    name : "ecommerce",
    initialState:{
        isLoading:false,
        reject:false,
        cateGoryList:[]
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(categoryProduct.pending , (state , action) => {
            state.isLoading = true
            state.reject = false
        })
        builder.addCase(categoryProduct.fulfilled , (state , action) => {
            state.isLoading = false
            state.reject  = false
            state.cateGoryList = action.payload
        })
        builder.addCase(categoryProduct.rejected , (state , action) => {
            state.isLoading = false
            state.reject = true
        })      
    }
})

export default ecommerce.reducer
