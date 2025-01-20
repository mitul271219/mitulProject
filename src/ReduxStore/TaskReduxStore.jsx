import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./TaskSlice";



const rootStore = configureStore({
    reducer:{
        Datas:taskSlice      
    }
})

export default rootStore