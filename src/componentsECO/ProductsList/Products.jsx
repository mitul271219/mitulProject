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
import { NavLink } from "react-router-dom";
import { ClipLoader } from 'react-spinners';  // <-- Import ClipLoader here



export const Products = () => {
    const state = useSelector((state) => state?.ecoProject);
    const dispatch = useDispatch();

    console.log(state?.listOfProduct);
    
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










    // EXAMPLES 

    let jim = "jam"
    const Funcs = async () => {
        return jim
    }

    // Func().then((res) => {
    //     console.log(res); // jam
    // })
    const getData = async () => {
        const datares = await Funcs()
        return datares
    }
    // console.log(getData());
    // const datares = Funcs()
    // console.log(datares);
    


    const Func2 = async () => {
        const fun1 = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const ans1 = "calling 1";
                    resolve(ans1);
                }, 2000);
            });
        };
    
        const fun2 = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const ans2 = "calling 2";
                    resolve(ans2);
                }, 5000);
            });
        };
    
        const data1 = await fun1();
        console.log("fun1 is calling...  " + data1);
        
        const data2 = await fun2();
        console.log("fun2 is calling...  " + data2);
    
        return [data1, data2];
    };
    
    // const result = Func2();  // Need to await the async function call
    // console.log(result); // Logs the results once the promises resolve
    // Func2().then((res) => {
    //     console.log(res);  
    // })  


    // that code are showing like first time call (result) and after call (result2)
    const SecondFunc =  async () => {
        console.log("Second Function is calling...");
    }

    const MainFunc = async () => {
        const result =  await Func2(); 
       // console.log(result); // ['calling 1', 'calling 2']
       const result2 = await SecondFunc() 
    }
    MainFunc()



    // this coading is showing exicute is step by step like asyncrozie calling

    // const SecondFunc = () => {
    //     console.log("Second Function is calling...");
    // }


    //  const MainFunc = () => {
    //     const result = Func2(); 
    //     console.log(result);
    //     SecondFunc() 
    // }
    // MainFunc()

    
    

    


    return (
        <>
           <div className='container'>
                {/* Show spinner while loading */}
                {state.isLoading ? (
    <div className="spinner-container">
        <ClipLoader color="#000000" loading={state.isLoading} size={50} />
    </div>
) : state.reject ? (
    <div>
        <div style={{textAlign:"center"}}>
        <h3 style={{ textAlign: "center", color: "red" }}>Server Error</h3>
        <button style={{color:"red"}} onClick={() => {
            dispatch(categoryProduct());
            dispatch(productS());
        }}>Retry</button>
        </div>
    </div>
) : (
    <div className="row">
        {currentCategories.map((cat) => {
            const filterListProducts = state?.listOfProduct.filter(
                (ele) => ele.category.name === cat
            );
            return (
                <div key={cat} className='container'>
                    <div className='row product_Border'>
                        <h4>{cat}</h4>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            modules={[Navigation, Pagination]}
                            pagination={{ clickable: true }}
                            navigation
                        >
                {state.isLoading ? (
    <div className="spinner-container">
        <ClipLoader color="#000000" loading={state.isLoading} size={50} />
    </div>
) : (
    filterListProducts.map((ele) => {
        // Parse the images array from the stringified version in the object
       // const imageUrls = JSON.parse(ele?.images); // Parse the first image URL (assuming it’s an array with one URL)
        {/* console.log(imageUrls) */}
        {/* {imageUrls.map((url, index) => {
            console.log(typeof url)
        })} */}
       // console.log(imageUrls)
    

        return (
            <SwiperSlide key={ele.id} className='col-3 products_Border'>
                <NavLink style={{ textDecoration: "none" }} to={`/singleProduct/${ele?.id}`}>
                    {/* Render the first image URL from the parsed array */}
                    <img style={{ maxWidth: "100%", maxHeight: "100%", height: "180px" }} src={ele.images} alt={ele.title} />
                    <h5>{ele.title}</h5>
                    <p>{ele.price}</p>
                </NavLink>
            </SwiperSlide>
        );
    })
)}

                        </Swiper>
                    </div>
                </div>
            );
        })}
    </div>
)}


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
