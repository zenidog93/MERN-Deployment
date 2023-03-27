const Store = require('../models/store.model');

module.exports.findAll = (req, res) => {
    Store.find({}).sort("storeNumber")
        .then((stores) => {
            res.json(stores)
        })
        .catch((err) => {
            res.status(400).json({message: "Something went werong", error: err})
        })
};

module.exports.createNew = (req, res) => {
    Store.create(req.body)
        .then((store) => {
            res.json(store)
        })
        .catch((err) => {
            res.status(400).json({message:'Something went wrong', error:err})
        })
}

module.exports.FindOneByID = (req, res) => {
    Store.findOne({ _id: req.params.id })
        .then((store) => {
            res.json(store)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error: err})
        })
};

module.exports.updateExisting = (req, res) => {
    Store.findOneAndUpdate(
        {_id: req.params.id},
        req.body, 
        {new:true, runValidators:true}
        )
        .then((store) => {
            res.json(store)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error: err})
        })
};
module.exports.deleteAnExisting = (req, res) => {
    Store.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}