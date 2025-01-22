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











// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { categoryProduct, productS } from '../../ReduxStore/EcoSlice';
// import './Products.scss';

// export const Products = () => {
//     const state = useSelector((state) => state?.ecoProject);
//     const dispatch = useDispatch();
    
//     const [currentPage, setCurrentPage] = useState(1);
//     const categoriesPerPage = 4; // Show 3 categories per page

//     const categoryData = [...new Set(state?.cateGoryList.map((cat) => cat.name))];

//     // Get the categories for the current page
//     const indexOfLastCategory = currentPage * categoriesPerPage;
//     console.log(indexOfLastCategory + " indexOfLastCategory");
//     const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
//     console.log(indexOfFirstCategory + " indexOfFirstCategory");
//     const currentCategories = categoryData.slice(indexOfFirstCategory, indexOfLastCategory);
//     console.log(currentCategories);
    

//     useEffect(() => {
//         dispatch(categoryProduct());
//         dispatch(productS());
//     }, [dispatch]);

//     // Function to handle page changes
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <>
//             <div className='container'>
//                 <div className='row'>
//                     {currentCategories.map((cat) => {
//                         const filterListProducts = state?.listOfProduct.filter(
//                             (ele) => ele.category.name === cat
//                         );
//                         return (
//                             <div key={cat} className='container'>
//                                 <div className='row product_Border'>
//                                     <h4>{cat}</h4>
//                                     {filterListProducts.map((ele) => {
//                                         return (
//                                             <div key={ele.id} className='col-3 products_Border'>
//                                                 {/* Display product details here */}
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Pagination Controls */}
//                 <div className="pagination">
//                     <button 
//                         onClick={() => handlePageChange(currentPage - 1)} 
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                     <button 
//                         onClick={() => handlePageChange(currentPage + 1)} 
//                         disabled={currentPage === Math.ceil(categoryData.length / categoriesPerPage)}
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };







// import React, { useEffect, useState } from 'react'; 
// import { useDispatch, useSelector } from 'react-redux';
// import { categoryProduct, productS } from '../../ReduxStore/EcoSlice';
// import './Products.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';  // Import Swiper styles
// import 'swiper/css';

// export const Products = () => {
//     const state = useSelector((state) => state?.ecoProject);
//     const dispatch = useDispatch();
    
//     const [currentPage, setCurrentPage] = useState(1);
//     const categoriesPerPage = 4; // Show 4 categories per page

//     const categoryData = [...new Set(state?.cateGoryList.map((cat) => cat.name))];

//     // Get the categories for the current page
//     const indexOfLastCategory = currentPage * categoriesPerPage;
//     const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
//     const currentCategories = categoryData.slice(indexOfFirstCategory, indexOfLastCategory);

//     useEffect(() => {
//         dispatch(categoryProduct());
//         dispatch(productS());
//     }, [dispatch]);

//     // Function to handle page changes
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <>
//             <div className='container'>
//                 <div className='row'>
//                     {currentCategories.map((cat) => {
//                         const filterListProducts = state?.listOfProduct.filter(
//                             (ele) => ele.category.name === cat
//                         );
//                         return (
//                             <div key={cat} className='container'>
//                                 <div className='row product_Border'>
//                                     <h4>{cat}</h4>
                                    
//                                     {/* Swiper Slider for Products */}
//                                     <Swiper
//                                         spaceBetween={20} // Adjust space between slides
//                                         slidesPerView={3} // Number of products shown at once
//                                         loop={true} // Enable infinite loop
//                                         autoplay={{ delay: 3000 }} // Automatic slide change every 3 seconds
//                                     >
//                                         {filterListProducts.map((ele) => {
//                                             return (
//                                                 <SwiperSlide key={ele.id} className='col-3 products_Border'>
//                                                     {/* Display product details here */}
//                                                     <img src={ele.image} alt={ele.name} />
//                                                     <h5>{ele.name}</h5>
//                                                     <p>{ele.price}</p>
//                                                 </SwiperSlide>
//                                             );
//                                         })}
//                                     </Swiper>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Pagination Controls */}
//                 <div className="pagination">
//                     <button 
//                         onClick={() => handlePageChange(currentPage - 1)} 
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                     <button 
//                         onClick={() => handlePageChange(currentPage + 1)} 
//                         disabled={currentPage === Math.ceil(categoryData.length / categoriesPerPage)}
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };








import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { categoryProduct, productS } from '../../ReduxStore/EcoSlice';
import './Products.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Pagination styles
import { Navigation, Pagination } from 'swiper/modules'; // Correct Swiper module import for v9+

export const Products = () => {
    const state = useSelector((state) => state?.ecoProject);
    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1);
    const categoriesPerPage = 4; // Show 4 categories per page

    const categoryData = [...new Set(state?.cateGoryList.map((cat) => cat.name))];

    // Get the categories for the current page
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = categoryData.slice(indexOfFirstCategory, indexOfLastCategory);

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
                                    
                                    {/* Swiper Slider for Products */}
                                    <Swiper
                                        spaceBetween={20} // Adjust space between slides
                                        slidesPerView={3} // Number of products shown at once
                                        loop={true} // Enable infinite loop
                                        autoplay={{ delay: 3000 }} // Automatic slide change every 3 seconds
                                        modules={[Navigation, Pagination]}  // Add the required modules
                                        pagination={{ clickable: true }}   // Enable pagination
                                        navigation  // Enable navigation buttons
                                    >
                                        {filterListProducts.map((ele) => {
                                            return (
                                                <SwiperSlide key={ele.id} className='col-3 products_Border'>
                                                    {/* Display product details here */}
                                                    <img src={ele.image} alt={ele.name} />
                                                    <h5>{ele.title}</h5>
                                                    <p>{ele.price}</p>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
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
