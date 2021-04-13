const Journal = require('../models/journal');

async function index(req, res) {
    try {
        const journal = await Journal.find({});
        res.status(200).json(journal); // send skills as JSON data as an HTTP response
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
 }
 
 async function create(req, res) {
     try {
         const journal = await Journal.create(req.body);
         res.status(201).json(journal);
        //  index(req, res);
     } catch (error) {
         res.status(401).json({ error: 'something went wrong' });
     }
 }
 
 module.exports = {
     index,
     create,
 };