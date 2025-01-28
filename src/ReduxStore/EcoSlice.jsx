import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const categoryProduct = createAsyncThunk("categoryProduct" , async () => {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/categories`)
        return await res.data
  })

export const productS = createAsyncThunk("productS" , async () => {
    const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
    return await res.data
})

export const singleApiProduct = createAsyncThunk("singleApiProduct" , async (id) => {
    const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        return await res.data
})

export const createProducts = createAsyncThunk("createProducts" , async (user) => {
    const res = await axios.post(`https://api.escuelajs.co/api/v1/products/`,{
            "title": user.title,
            "price": parseInt(user.price),
            "description": user.description,
            "categoryId": user.categoryId,
            "images": user.images.split()
    })
    return await res.data
})

const ecommerce = createSlice({
    name : "ecommerce",
    initialState:{
        isLoading:false,
        reject:false,
        cateGoryList:[],
        listOfProduct:[],
        singleProductData:[]
    },
    reducers:{

    },
    extraReducers:(builder) => {
        // categoryProduct
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

        // productS        
        builder.addCase(productS.pending , (state , action) => {
            state.isLoading = true
            // state.reject = false
        })
        builder.addCase(productS.fulfilled , (state , action) => {
            state.isLoading = false
            // state.reject  = false
            state.listOfProduct = action.payload
        })
        builder.addCase(productS.rejected , (state , action) => {
            state.isLoading = false
            // state.reject = true
        })

        // createProducts
        builder.addCase(createProducts.pending , (state) => {
            state.isLoading = true
        })
        builder.addCase(createProducts.fulfilled , (state , action) => {
            state.isLoading = false
            state.listOfProduct = action.payload
        })
        builder.addCase(createProducts.rejected , (state) => {
            state.isLoading = false
        })
        
        // singleApiProduct
        builder.addCase(singleApiProduct.pending , (state) => {
            state.isLoading = true
            state.reject = false
        })
        builder.addCase(singleApiProduct.fulfilled , (state , action) => {
            state.isLoading = false
            state.reject  = false
            state.singleProductData = action.payload
        })
        builder.addCase(singleApiProduct.rejected , (state) => {
            state.isLoading = false
            state.reject = true
        })
    }
})

export default ecommerce.reducer
