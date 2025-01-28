// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { categoryProduct } from '../../ReduxStore/EcoSlice';
// import './Createproduct.scss'


// export const Createproduct = () => {
//     const state = useSelector((state) => state?.ecoProject);
//     console.log(state);
//     const dispatch = useDispatch();

//     const [inputProduct, setInputProduct] = useState({
//         title: "",
//         price: "",
//         description: "",
//         categoryId: "",
//         images: ""
//     });

//     const HandleInput = (e) => {
//         const Name = e.target.name;
//         const Val = e.target.value;
//         setInputProduct({ ...inputProduct, [Name]: Val });
//     };

//     useEffect(() => {
//         dispatch(categoryProduct());
//     }, [dispatch]);

//     return (
//         <div className="container">
//             <div className="row">
//                 <h2>Create Product</h2>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter product title"
//                     value={inputProduct.title}
//                     onChange={HandleInput}
//                 />
//                 <input
//                     type="text"
//                     name="price"
//                     placeholder="Enter product price"
//                     value={inputProduct.price}
//                     onChange={HandleInput}
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Enter product description"
//                     value={inputProduct.description}
//                     onChange={HandleInput}
//                 />
//                 <input
//                     type="text"
//                     name="images"
//                     placeholder="Enter image URL"
//                     value={inputProduct.images}
//                     onChange={HandleInput}
//                 />
//                 <button>Submit</button>
//             </div>
//         </div>
//     );
// };


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryProduct, createProducts } from '../../ReduxStore/EcoSlice';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';  // Importing React-Bootstrap components
// import Form from 'react-bootstrap/Form';
import './Createproduct.scss';

export const Createproduct = () => {
    const state = useSelector((state) => state?.ecoProject);
    console.log(state);
    const dispatch = useDispatch();

    const [inputProduct, setInputProduct] = useState({
        title: "",
        price: "",
        description: "",
        categoryId: "",
        images: ""
    });

    const HandleInput = (e) => {
        const Name = e.target.name;
        const Val = e.target.value;
        setInputProduct({ ...inputProduct, [Name]: Val });
    };


        // const HandleClick = () => {
        //         console.log(inputProduct);  
        //         dispatch(createProducts(inputProduct).then((res) => {
        //             console.log(res);
        //         })
        //     )
        // }   

        const HandleClick = () => {
            console.log(inputProduct);
            dispatch(createProducts(inputProduct))
              .then((res) => {
                console.log(res); // You can now handle the response from the async action here
              })
              .catch((err) => {
                console.error('Error:', err);
              });
          }


    useEffect(() => {
        dispatch(categoryProduct());
    }, [dispatch]);

    

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} sm={12} className="d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-center mb-4">Create Product</h2>
                    <Form className="w-100">
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Enter product title"
                                value={inputProduct.title}
                                onChange={HandleInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="price"
                                placeholder="Enter product price"
                                value={inputProduct.price}
                                onChange={HandleInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Enter product description"
                                value={inputProduct.description}
                                onChange={HandleInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="images"
                                placeholder="Enter image URL"
                                value={inputProduct.images}
                                onChange={HandleInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Select 
                                aria-label="Select Category" 
                                name="categoryId" 
                                value={inputProduct.categoryId} 
                                onChange={HandleInput}
                            >
                                <option>Select Category</option>
                                {state?.cateGoryList.map((ele) => (
                                    <option key={ele?.id} value={ele?.id}>
                                        {ele?.name}
                                    </option>
                                ))}
                            </Form.Select>
                         </Form.Group>


                        <Button variant="primary" className="w-100" onClick={() => HandleClick()}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
