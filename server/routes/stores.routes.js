const StoreController = require('../controllers/stores.controller')

// These routes are following proper RESTful API naming conventions
// we do not specificy the CRDU functionality in the route name
// rather, we use the HTTP request method to determin the CRUD functionality

module.exports = (app) => {
    app.get('/api/stores', StoreController.findAll);
    app.get('/api/stores/:id', StoreController.FindOneByID);
    app.put('/api/stores/:id', StoreController.updateExisting);
    app.post('/api/stores', StoreController.createNew);
    app.delete('/api/stores/:id', StoreController.deleteAnExisting)
}