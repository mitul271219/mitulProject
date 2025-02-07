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
import './Createproduct.scss';
import { useNavigate } from 'react-router-dom';

export const Createproduct = () => {
    const state = useSelector((state) => state?.ecoProject);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [inputProduct, setInputProduct] = useState({
        title: "",
        price: "",
        description: "",
        categoryId: "",
        images: ""
    });

    const [errors, setErrors] = useState({
        title: "",
        price: "",
        description: "",
        categoryId: "",
        images: ""
    });

    const HandleInput = (e) => {
        const { name, value } = e.target;
        setInputProduct({ ...inputProduct, [name]: value });
    };

    // Form validation function
    const validateForm = () => {
        let formIsValid = true;
        let newErrors = { title: "", price: "", description: "", categoryId: "", images: "" };

        if (!inputProduct.title) {
            newErrors.title = "Title is required.";
            formIsValid = false;
        }

        if (!inputProduct.price) {
            newErrors.price = "Price is required.";
            formIsValid = false;
        }

        if (!inputProduct.description) {
            newErrors.description = "Description is required.";
            formIsValid = false;
        }

        if (!inputProduct.categoryId) {
            newErrors.categoryId = "Category is required.";
            formIsValid = false;
        }

        if (!inputProduct.images) {
            newErrors.images = "Image URL is required.";
            formIsValid = false;
        }

        setErrors(newErrors); // Set the error messages
        return formIsValid;
    };

    // Handle form submit
    const HandleClick = () => {
        if (validateForm()) {
            // If form is valid, dispatch the create product action
            console.log(inputProduct);
            dispatch(createProducts(inputProduct))
                .then((res) => {
                    console.log(res); // Handle the response from the async action
                    // console.log(res?.meta?.requestStatus); 
                    if (res?.meta?.requestStatus === "fulfilled") {
                        navigation('/')
                    }
                })
                
        } else {
            console.log("Form has errors, not submitting.");
        }
    };

    useEffect(() => {
        dispatch(categoryProduct());
    }, [dispatch]);

    return (
        <div className="my-5 main_Border">
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
                                isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="price"
                                placeholder="Enter product price"
                                value={inputProduct.price}
                                onChange={HandleInput}
                                isInvalid={!!errors.price}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.price}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Enter product description"
                                value={inputProduct.description}
                                onChange={HandleInput}
                                isInvalid={!!errors.description}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.description}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="images"
                                placeholder="Enter image URL"
                                value={inputProduct.images}
                                onChange={HandleInput}
                                isInvalid={!!errors.images}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.images}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Select
                                aria-label="Select Category"
                                name="categoryId"
                                value={inputProduct.categoryId}
                                onChange={HandleInput}
                                isInvalid={!!errors.categoryId}
                            >
                                <option>Select Category</option>
                                {state?.cateGoryList.map((ele) => (
                                    <option key={ele?.id} value={ele?.id}>
                                        {ele?.name}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.categoryId}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" className="w-100" onClick={HandleClick}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};
