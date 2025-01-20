// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getedList, postList } from '../ReduxStore/TaskSlice';

// export const Hometask2 = () => {

//     const state = useSelector((state) => state?.Datas?.postedDataList)
//     console.log(state);
//     const dispatch = useDispatch()
    


//     const [inputVal , setInputVal] = useState({
//         spaname:"",
//         city:"",
//         area:"",
//         price:"",
//         timing:"",
//         images:""
//     })

//         const HandleChange = (e) => {
//             const Name = e.target.name 
//             const Val = e.target.value
//             setInputVal({...inputVal , [Name]:Val})
//         }

//         useEffect(() => {
//             dispatch(postList(inputVal))
//         } ,[HandleChange , dispatch])

    

//         useEffect(() => {
//             dispatch(getedList())
//         },[])

//   return (
//     <>
//         <div>Hometask2</div>

//         <div className='container'>
//             <div className='row'>
//                 <div className='col-6' style={{border:"2px solid black" , padding:"10px" , textAlign:"center"}}>
//                         <input type="text" placeholder='spa_name' name='spaname' value={inputVal.spaname}  onChange={HandleChange}/>
//                         <br />
//                         <input type="text" placeholder='city' name='city' value={inputVal.city} onChange={HandleChange} />
//                         <br />
//                         <input type="text" placeholder='area' name='area' value={inputVal.area} onChange={HandleChange}/>
//                         <br />
//                         <input type="text" placeholder='price' name='price' value={inputVal.price} onChange={HandleChange}/>
//                         <br />
//                         <input type="text" placeholder='timing' name='timing' value={inputVal.timing} onChange={HandleChange}/>
//                         <br />
//                         <input type="text" placeholder='images' name='images' value={inputVal.images} onChange={HandleChange}/>
                        
//                 </div>

//                 <div className='col-6' style={{border:"2px solid black" , padding:"10px" , textAlign:"center"}}>

//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }


























import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getedList, postList } from '../ReduxStore/TaskSlice';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export const Hometask2 = () => {

    const state = useSelector((state) => state?.Datas?.postedDataList);
    console.log(state);

    const dispatch = useDispatch()

    const [inputVal, setInputVal] = useState({
        spaname: "",
        city: "",
        area: "",
        price: "",
        timing: "",
        images: []
    });

    // Handle form input changes
    const HandleChange = (e) => {
        const Name = e.target.name;
        const Val = e.target.value;
        setInputVal({ ...inputVal, [Name]: Val });
    };

    // Handle file input change (for images)
    const handleFileChange = (e) => {
        setInputVal({
            ...inputVal,
            images: Array.from(e.target.files)
        });
    };

    // Dispatch POST request when form data changes
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postList(inputVal));
    };

    useEffect(() => {
        dispatch(getedList());
    }, []);

    return (
        <>
            <div>Hometask2</div>

            <div className="container">
                <div className="row">
                    {/* Left Section: Form */}
                    <div className="col-12 col-md-6" style={{ border: "2px solid black", padding: "10px" }}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Spa Name"
                                name="spaname"
                                value={inputVal.spaname}
                                onChange={HandleChange}
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="City"
                                name="city"
                                value={inputVal.city}
                                onChange={HandleChange}
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Area"
                                name="area"
                                value={inputVal.area}
                                onChange={HandleChange}
                            />
                            <br />
                            <input
                                type="number"
                                placeholder="Price"
                                name="price"
                                value={inputVal.price}
                                onChange={HandleChange}
                            />
                            <br />
                            <input
                                type="time"
                                placeholder="Timing"
                                name="timing"
                                value={inputVal.timing}
                                onChange={HandleChange}
                            />
                            <br />
                            <input
                                type="file"
                                name="images"
                                multiple
                                onChange={handleFileChange}
                            />
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    {/* Right Section: Live Preview */}
                    <div className="col-12 col-md-6" style={{ border: "2px solid black", padding: "10px" }}>
                        <h3>Live Preview</h3>
                        <div>
                            <p><strong>Spa Name:</strong> {inputVal.spaname}</p>
                            <p><strong>City:</strong> {inputVal.city}</p>
                            <p><strong>Area:</strong> {inputVal.area}</p>
                            <p><strong>Price:</strong> {inputVal.price}</p>
                            <p><strong>Timing:</strong> {inputVal.timing}</p>
                        </div>

                        {/* Swiper for images */}
                        {inputVal.images.length > 0 && (
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {inputVal.images.map((image, index) => (
                                        <div key={index} className="swiper-slide">
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={`Image ${index}`}
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}




