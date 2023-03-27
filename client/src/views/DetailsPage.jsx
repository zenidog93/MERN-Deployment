import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link } from 'react-router-dom';
import Title from '../component/Title';

const DetailsPage = () => {

    const nav = useNavigate();
    const [oneStore, setOneStore] = useState({});
    const {id} = useParams();

    
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/stores/${id}`)
        .then((res) => {
            // console.log(res.data)
            setOneStore(res.data);
        })
        .catch((err) => console.log(err))
    }, []);
    // console.log(dish)
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <Title />
                <Link to ='/'>Go Back Home</Link>
            </div>
            {oneStore && (
                <div>
                    <p>Store Name: {oneStore.name}</p>
                    <p>Store Number: {oneStore.storeNumber}</p>
                    <p>Is Open? {oneStore.isOpen ? 'True' : 'False'}</p>
                </div>
            )}
            <Link to={`/stores/edit/${oneStore._id}`}><button className='btn btn-warning'>Edit</button></Link>
        </div>
    )
};

export default DetailsPage;