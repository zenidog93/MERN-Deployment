import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from '../component/Title';
import DeleteButton from '../component/DeleteButton';



const Dashboard = () => {
    const [allStores, setAllStores] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/stores')
        .then((res) => {
            setAllStores(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const removeItemFromDom = (storeIdToDelete) => {
        setAllStores(allStores.filter((oneStore) => oneStore._id !== storeIdToDelete))
        
    };
    
    return (
        <div>
            <Title />
            <div>
                <h3>Find Stores in your area!</h3>
                <table className='table table-primary table table-striped'>
                    <thead>
                        <tr>
                            <th>Store</th>
                            <th>Store Number</th>
                            <th>Open</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStores.map((oneStore, index) => (
                            <tr key= {index}>
                                <td><Link to ={`/stores/${oneStore._id}`}>{oneStore.name}</Link></td>
                                <td>{oneStore.storeNumber}</td>
                                <td>{oneStore.isOpen ? 'True' : 'False'}</td>
                                <td>
                                    <DeleteButton
                                        storeId = {oneStore._id}
                                        successCallBack = {removeItemFromDom}
                                    />
                                </td>

                            </tr>
                        ))

                        }
                    </tbody>

                </table>
                <Link to ='/store/add'><button className='btn btn-success'>Can't find your store?</button></Link>
            </div>
        </div>
    )
};

export default Dashboard