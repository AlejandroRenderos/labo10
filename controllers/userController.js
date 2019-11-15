const userModel = require("../models/user");

//obtener todos
const getAll = (req, res) => {
  userModel.find((err, users) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Something went wrong with the server" });

    if (user) {
      res
        .status(200)
        .json({ message: "Obtuvimos a los usuarios", users: users });
    } else {
      res.status(404).json({ message: "No hay usuaerios :v" });
    }
  });
};
//obtener uno
const getById = (req, res) => {
  let id = req.params.id;
  userModel.findById((err, users) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Something went wrong with the server" });

    if (user) {
      res
        .status(200)
        .json({ message: "Obtuvimos a los usuarios", users: users });
    } else {
      res.status(404).json({ message: "No hay usuaerios :v" });
    }
  });
};
// crear
const getAll = (req, res) => {
  let new_user = new userModel(req.body);
  new_user.save(() => {
    if (err) return res.status(500).json({ message: "error" });

    res.status(200).json({ message: "Sucsess" });
  });
};

//actualizar
const updateUser = (req, res) => {
  let user = req.body;
  if (!user._id) {
    return res.status(400).json({ message: "The id is required" });
  }
  userModel.update({ _id: user._id }, user).then(value => {
    res
      .status(200)
      .json({ message: "the update is ok", user_: user })
      .cath(err => {
        res.status(500).json({ message: "Something wrong" });
      });
  });
};
// eliminar
const delateUser = (req, res) => {
  let user = req.body;
  if (!user._id) {
    return res.status(400).json({ message: "The id is required" });
  }
  userModel.update({ _id: user._id }, user).then(value => {
    res
      .status(200)
      .json({ message: "the update is ok", user_: user })
      .cath(err => {
        res.status(500).json({ message: "Something wrong" });
      });
  });
};
module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  delateUser
};
