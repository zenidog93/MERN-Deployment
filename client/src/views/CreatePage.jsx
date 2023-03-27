import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


import StoreForm from "../component/StoreForm";
import Title from "../component/Title";

const CreatePage = () => {

    const nav = useNavigate();

    const[formErrors, setFormErrors] = useState([])

    const createStore = (newStore) => {
        axios
        .post('http://localhost:8000/api/stores', newStore)
        .then((res) => {
            // console.log(res.data)
            nav(`/stores/${res.data._id}`);
        })
        .catch((err) => {
            console.log(err); 
            const errorResponse= err.response.data.error.errors

            const errorArr =[];
            //loop through the error respone object 
            //and put all the messageinside of the error array
            for (const key in errorResponse){
                // console.log(errorResponse[key].message);
                errorArr.push(errorResponse[key].message);
            }
            setFormErrors(errorResponse);
        });
        
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <Title />
                <Link to ='/'>Go Back Home</Link>
            </div>
            <StoreForm 
                submitFormInformation ={createStore}
                store ={{name:'', storeNumber:'', isOpen: true}}
                errors = {formErrors}
            />
            
        </div>
    )

};

export default CreatePage;