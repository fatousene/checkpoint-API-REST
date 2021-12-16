const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get("/all-user", userController.allUser)
router.post('/add-user', userController.AddUser)
router.delete('/delete-user/:id', userController.deleteUser)
router.put('/update-user/:id', userController.updateUser)

module.exports = router