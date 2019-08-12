module.exports = app => {
  //
  const getUser = (req, res) => {
    const { modelo } = app.models.mongodb;

    const idUSer = req.params.id || req.body.id;

    if (!idUSer) {
      const hasEmail = modelo.findOne({ email: "bc" });
      console.log(hasEmail);
      //   return modelo.find().then(user => res.send(user));
      return modelo.findOne({ email: "bc" }).then(re => res.send(re));
    } else {
      modelo.findById(idUSer).then(user => res.send(user));
    }
  };

  return { getUser };
};
