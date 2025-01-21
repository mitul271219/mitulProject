// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { categoryProduct, productS } from '../../ReduxStore/EcoSlice';
// import './Products.scss'


// export const Products = () => {

//     const state  = useSelector((state) => state?.ecoProject)
//     console.log(state);
//     const dispatch = useDispatch()


//     const categoryData = [...new Set(state?.cateGoryList.map((cat) => {
//             return cat.name
//     }))]
//     console.log(categoryData);
    


//     useEffect(() => {
//         dispatch(categoryProduct())
//         dispatch(productS())
//     },[])
    

//   return (
//    <>
//         <div className='container'>
//             <div className='row'>

//                 {categoryData.map((cat) => {
//                     const filterListProducts = state?.listOfProduct.filter((ele) => ele.category.name === cat)
//                     {/* console.log(filterListProducts) */}
//                     return(
//                         <>
//                             <div  key={cat} className='container'>
//                                 <div className='row product_Border'>
//                                     <h4>{cat}</h4>
//                                     {filterListProducts.map((ele) => {
//                                         return(
//                                             <>
//                                                 <div className='col-3 products_Border'>

//                                                 </div>
//                                             </>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })}

//             </div>
//         </div>
//    </>
//   )
// }











import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryProduct, productS } from '../../ReduxStore/EcoSlice';
import './Products.scss';

export const Products = () => {
    const state = useSelector((state) => state?.ecoProject);
    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1);
    const categoriesPerPage = 4; // Show 3 categories per page

    const categoryData = [...new Set(state?.cateGoryList.map((cat) => cat.name))];

    // Get the categories for the current page
    const indexOfLastCategory = currentPage * categoriesPerPage;
    console.log(indexOfLastCategory + " indexOfLastCategory");
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    console.log(indexOfFirstCategory + " indexOfFirstCategory");
    const currentCategories = categoryData.slice(indexOfFirstCategory, indexOfLastCategory);
    console.log(currentCategories);
    

    useEffect(() => {
        dispatch(categoryProduct());
        dispatch(productS());
    }, [dispatch]);

    // Function to handle page changes
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {currentCategories.map((cat) => {
                        const filterListProducts = state?.listOfProduct.filter(
                            (ele) => ele.category.name === cat
                        );
                        return (
                            <div key={cat} className='container'>
                                <div className='row product_Border'>
                                    <h4>{cat}</h4>
                                    {filterListProducts.map((ele) => {
                                        return (
                                            <div key={ele.id} className='col-3 products_Border'>
                                                {/* Display product details here */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination Controls */}
                <div className="pagination">
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === Math.ceil(categoryData.length / categoriesPerPage)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

