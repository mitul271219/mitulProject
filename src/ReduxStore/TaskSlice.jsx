import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


    export const getList = createAsyncThunk("getList" , async (count) => {
            const res = await axios.get(`http://20.193.149.47:2242/salons/service/?page=${count}`)
            return await res.data
    })    


    // Task2 

    export const getedList = createAsyncThunk("getedList" , async () => {
        const res  = await axios.get(`http://20.193.149.47:2242/spas/vendor-spa-update-test/1/`)
        return await res.data
    })

    // export const postList = createAsyncThunk("postList" , async (user) => {
    //     const res = await axios.put(`http://20.193.149.47:2242/spas/vendor-spa-update-test/1/` , {
    //         "spa_name":user.spaname,
    //         "city":user.city,
    //         "area":user.price,
    //         "timing":user.timing,
    //         "images":user.images
    //     })
    //     return await res.data
    // })
    export const postList = createAsyncThunk("postList", async (user) => {
        try {
            const formData = new FormData();
            formData.append("spa_name", user.spaname);
            formData.append("city", user.city);
            formData.append("area", user.area);
            formData.append("price", user.price);
            formData.append("timing", user.timing);
            user.images.forEach(image => formData.append("images", image));
    
            const res = await axios.put(
                "http://20.193.149.47:2242/spas/vendor-spa-update-test/1/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
    
            console.log('Response:', res);
            return res.data;
        } catch (error) {
            console.error('Error in POST request:', error.response || error);
            throw error;
        }
    });
      




const taskSlice = createSlice({
    name:"taskSlice",
    initialState:{
        isLoading:false,
        listedDatas:[],
        postedDataList:[]
    },
    reducers:{

    },

    extraReducers:(builder) => {
        // Task-1 
        builder.addCase(getList.pending , (state) => {
            state.isLoading = true
        })

        builder.addCase(getList.fulfilled , (state , action) => {
            state.isLoading = false
            state.listedDatas = action.payload
        })

        // Task-2 
        builder.addCase(postList.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(postList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postedDataList = action.payload;
        });
        // builder.addCase(postList.pending , (state , action) => {
        //     state.isLoading = true
        // })
        // builder.addCase(postList.fulfilled , (state , action) => {
        //     state.isLoading = false
        //     state.postedDataList = action.payload
        // })

    }
})

export default taskSlice.reducer