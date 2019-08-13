module.exports = app => {
  //
  const getUser = (req, res) => {
    const { modelo } = app.models.mongodb;

    const idUSer = req.params.id || req.body.id;

    if (!idUSer) {
      modelo
        .find()
        .sort("field -createdAt")
        .then(user => res.send(user))
        .catch(_ => res.send("Fail to get users"));
    } else {
      modelo
        .findById(idUSer)
        .then(user => res.send(user))
        .catch(_ => res.send("Fail to get user"));
    }
  };

  return { getUser };
};
