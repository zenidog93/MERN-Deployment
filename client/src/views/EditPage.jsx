import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import StoreForm from "../component/StoreForm";
import Title from "../component/Title";

const EditPage = () => {
    const nav = useNavigate();
    const {id} = useParams();

    const [oneStore, setOneStore] = useState();
    const [formErrors, setFormErrors] = useState([])


    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/stores/${id}`)
        .then((res) => {
            setOneStore(res.data)
            console.log(oneStore)
            
        })
        .catch((err) => console.log(err))
    }, [])

    const updateStore =(storeToUpdate) => {
        
        axios
            .put(`http://localhost:8000/api/stores/${id}`, storeToUpdate)
            .then(() => {
                nav(`/stores/${id}`);
            })
            .catch((err) => {
                console.log(err);
                const errorResponse= err.response.data.error.errors;

                setFormErrors(errorResponse);

            });
    }


    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <Title />
                <Link to ='/'>Go Back Home</Link>
            </div>
            {
                oneStore && (
                    <div>
                        <StoreForm 
                            submitFormInformation = {updateStore}
                            store = {oneStore}
                            errors = {formErrors}
                        />
                    </div>
                )
            }
        </div>
    )
};

export default EditPage;