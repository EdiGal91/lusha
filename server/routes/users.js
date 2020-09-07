const router = require('express').Router()
const usersController = require('../controller/users')
const usersMiddleware = require('../middleware/user')

router.get('/', usersController.getAllUsers)
router.post('/', usersMiddleware.validateUser, usersController.addUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router;