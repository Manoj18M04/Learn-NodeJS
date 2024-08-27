const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students_controller");

// View all records
router.get('/', studentController.view);

// Add new records
router.get('/addUser', studentController.addUser);
router.post('/addUser', studentController.save);

// Update records
router.get('/editUser/:id', studentController.editUser);
router.post('/editUser/:id', studentController.edit);

// Delete records
router.get('/deleteUser/:id', studentController.delete);

module.exports = router;