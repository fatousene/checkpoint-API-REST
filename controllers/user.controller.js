const User = require('../models/user.model')
//GET :  RETURN ALL USERS 
module.exports.allUser = async (req, res) => {
    const users = await User.find();
    res.status(200).json({users});
};
// POST :  ADD A NEW USER TO THE DATABASE 
module.exports.AddUser = async (req, res) => {
    const { name, e_mail } = req.body;

   try{ 
       const user = await User.create({
        name,
        e_mail
      })
   res.status(201).send({user: user._id});
} catch(err){
    res.status(500).send({message: err});
}
};
// DELETE : REMOVE A USER BY ID
module.exports.deleteUser = async (req, res) => {
    await User.remove({_id: req.params.id}).exec();
    res.status(200).send({message: "supprimer"})
}
//PUT : EDIT A USER BY ID
module.exports.updateUser = async (req, res) => {
    await User.findByIdAndUpdate(
        {_id: req.params.id},
    {
        $set: {
            name: req.body.name,
            e_mail: req.body.e_mail
              }
    },
    {new: true},
    (err, data) => {
        if(!err) res.status(200).send(data);
        else res.status(500).send({err});
    }
    )  
}










