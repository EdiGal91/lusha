const User = require('../model/User')

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
} 

exports.addUser = async (req, res) => {
    const { firstName, lastName, email, password, description } = req.body;
    try {
        const user = await User.create({ firstName, lastName, email, password, description });
        res.json(user);
    } catch(err) {
        res.status(409).send()
    }
}

exports.deleteUser = async (req, res) => {
    const { id: userId } = req.params;
    const result = await User.findByIdAndDelete(userId);
    res.json(result);
}