import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryProduct } from '../../ReduxStore/EcoSlice';

export const Products = () => {

    const state  = useSelector((state) => state?.ecoProject)
    console.log(state);
    const dispatch = useDispatch()


    const categoryData = [...new Set(state?.cateGoryList.map((cat) => {
            return cat.name
    }))]
    console.log(categoryData);
    


    useEffect(() => {
        dispatch(categoryProduct())
    },[])
    

  return (
   <>
        <div className='container'>
                <h3>Products</h3>
        </div>
   </>
  )
}
