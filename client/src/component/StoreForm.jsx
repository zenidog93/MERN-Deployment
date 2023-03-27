import React, {useState} from "react";

const StoreForm = (props) => {
    
    const [name, setName] = useState(props.store.name);
    const [storeNumber, setStoreNumber] = useState(props.store.storeNumber);
    const [isOpen, setIsOpen] = useState(props.store.isOpen);
    const {errors} = props;

    console.log(name);

    const handleSubmit =(event)=>{
        event.preventDefault();

        const storeData ={
            name: name,
            storeNumber: storeNumber,
            isOpen: isOpen,
        };
        
        //lift state information to parent for them to use data
        props.submitFormInformation(storeData);
    

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Store Name: </label>
            {/* only renders error message if there is an error from the back end */}
            {errors.name && <span className="text-danger">{errors.name.message}</span>}
            <p>
            <input 
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </p>

            <label>Store Number: </label>
            {/* only renders error message if there is an error from the back end */}
            {errors.storeNumber && <span className="text-danger">{errors.storeNumber.message}</span>}
            <p>
                <input 
                    type="number"
                    value={storeNumber}
                    onChange={(event) => setStoreNumber(event.target.value)}
                    min ="0"
                />
            </p>
            <label>Open?</label>
            <p>   
                <input 
                    type="checkbox"
                    checked={isOpen}
                    onChange={(event) => {setIsOpen(event.target.checked)}}
                />
            </p>
            <button className="btn btn-primary" >Add a new Store</button>
        </form>
    )
};

export default StoreForm;