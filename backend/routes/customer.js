const router = require('express').Router();
const Customer = require('../models/Customer');

//create a customer
router.post("/", async (req, res) => {
    const newCustomer = await new Customer(req.body);
    try {
       
        const saveCustomer = await newCustomer.save();
        res.status(200).json(saveCustomer);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET POST
router.get("/", async (req, res) => {

    try {

        let customers = await Customer.find();

        res.status(200).json(customers);

    } catch (error) {
        res.status(500).send(error)
    }
});



module.exports = router