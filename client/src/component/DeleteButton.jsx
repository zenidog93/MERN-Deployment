import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

const DeleteButton =(props) => {
    const {storeId, successCallBack} = props
    const deleteStore = (e) => {
        axios
        .delete(`http://localhost:8000/api/stores/${storeId}`)
        .then((res) => {
                        //if the delete query works, save the productID and lift the state back to parent
                        successCallBack(storeId);
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <button className='btn btn-danger' onClick={deleteStore}>Delete</button>
        </div>
    )
};

export default DeleteButton;