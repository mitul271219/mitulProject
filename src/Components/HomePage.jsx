import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../ReduxStore/TaskSlice';
import { ClipLoader } from 'react-spinners';
import { Hometask2 } from './Hometask2';



    // Helper function to remove HTML tags
    const removeHTMLTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };


export const HomePage = () => {
    const stateData = useSelector((state) => state.Datas);
    console.log(stateData);
    
    const { listedDatas, isLoading } = stateData;
    const dispatch = useDispatch();

    const [paginationBTN, setPaginationBTN] = useState(1);

    // Effect to fetch data on page change
    useEffect(() => {
        dispatch(getList(paginationBTN));
    }, [paginationBTN, dispatch]);

    // Disable buttons when loading or there is no next data to load
    const disablePrevButton = isLoading || paginationBTN === 1;
    const disableNextButton = isLoading || !listedDatas?.next;

    const [filterData, setFilterData] = useState(listedDatas?.results || []);
    const [searchBar, setSearchBar] = useState('');

    useEffect(() => {
        if (searchBar.trim() === '') {
            setFilterData(listedDatas?.results);
        } else {
            const searchData = listedDatas?.results.filter((ele) =>
                ele?.service_name.toLowerCase().includes(searchBar.toLowerCase())
            );
            setFilterData(searchData);
        }
    }, [searchBar, listedDatas?.results]);

    return (
       <>

<div className="container py-4">
            <div className="text-center mb-4">
                <h2>HomePage</h2>
            </div>

            <div className="row mb-4">
                <div className="col-12 col-md-6 offset-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchBar}
                        onChange={(e) => setSearchBar(e.target.value)}
                    />
                </div>
            </div>

            {/* Show loading message or spinner when data is loading */}
            {isLoading ? (
                <div className="text-center">
                    <ClipLoader size={50} color="#000000" />
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead style={{ textAlign: 'center' }}>
                            <tr>
                                <th scope="col">Salon Name</th>
                                <th scope="col">Service Image</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Service Time</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Discount Price</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {filterData?.map((ele, index) => (
                                <tr key={index}>
                                    <td>{ele?.salon_name}</td>
                                    <td>
                                        <img
                                            src={ele?.service_image}
                                            alt={ele?.service_name}
                                            width="50"
                                            height="50"
                                        />
                                    </td>
                                    <td>{ele?.service_name}</td>
                                    <td>
                                        Day: {ele?.service_time?.days}, Hour: {ele?.service_time?.hours}, minutes: {ele?.service_time?.minutes}, seating: {ele?.service_time?.seating}
                                    </td>
                                    <td>{ele?.category_data?.name}</td>
                                    {/* <td>{ele?.description}</td> */}
                                    {removeHTMLTags(ele?.description)}
                                    <td>{ele?.discount}</td>
                                    <td>{ele?.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="d-flex justify-content-center align-items-center mt-4">
                <button
                    onClick={() => setPaginationBTN(paginationBTN - 1)}
                    disabled={disablePrevButton}
                    className="btn btn-primary mx-2"
                >
                    Prev
                </button>
                <h4>{paginationBTN}</h4>
                <button
                    onClick={() => setPaginationBTN(paginationBTN + 1)}
                    disabled={disableNextButton}
                    className="btn btn-primary mx-2"
                >
                    Next
                </button>
            </div>
        </div>

        <hr />

        <Hometask2/>

       </>
    );
};
