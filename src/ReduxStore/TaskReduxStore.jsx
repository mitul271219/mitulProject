import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./TaskSlice";
import ecommerce from "./EcoSlice";



const rootStore = configureStore({
    reducer:{
        Datas:taskSlice,      
        ecoProject:ecommerce
    }
})

export default rootStore