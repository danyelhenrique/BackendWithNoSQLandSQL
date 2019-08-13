module.exports = app => {
  const DeleteUser = async (req, res) => {
    const idUSer = req.body.id || req.params.id;

    if (!idUSer) res.status(400).send("ID user not informed");

    const { modelo } = app.models.mongodb;

    try {
      const user = await modelo.findById(idUSer);
      if (!user) return res.status(400).send("Invalid ID user");
    } catch (error) {
      return res.status(400).send("Invalid ID user");
    }

    const delFromDb = await modelo
      .deleteOne({ _id: idUSer })
      .then(_ => res.status(200))
      .catch(_ => res.status(500).send("Failure to delete user"));

    const senUsers = await modelo
      .find()
      .sort("field createdAt")
      .then(user => res.send(user));
  };
  return { DeleteUser };
};
