//class we will be using to create our instances
//adjust NAME accordingly and any requirements. 

const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Required name missing"],
        minLength: [3, "Store name must be at least 3 charcters long"]
    },
    storeNumber: {
        type: Number,
        required:[true, "Store number required"],
        min: [1, "Submission must be greater than 1"]
    },
    isOpen: {
        type: Boolean,
        required: [true, 'Must specify if the store is open or not']
    }
}, {timestamps: true });

const Store = mongoose.model('Dish', StoreSchema);

module.exports = Store;
