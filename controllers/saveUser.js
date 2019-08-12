module.exports = app => {
  const { existOrErro, equalsOrError } = app.config.validation;
  const { validatePassword, hasCaracter } = app.config.validation;
  //

  const saveUser = (req, res) => {
    const { name, email, lastName } = req.body;
    const { password, confirmPassword, contact } = req.body;
    //

    try {
      existOrErro(name, "Name not informed");
      existOrErro(email, "E-mail not informed");
      existOrErro(lastName, " Last name not informed");
      existOrErro(password, "Password not informed");
      existOrErro(confirmPassword, "Password not informed");
      existOrErro(contact, "Contact not informed");
      //
      equalsOrError(password, confirmPassword, "Confimation password Fail");
      validatePassword(password, "Password must contain letters and numbers");
      hasCaracter(email, "Format E-mail invalid");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const { modelo } = app.models.mongodb;
    const hasEmail = modelo.findOne({ email }).then(re => re.email) || "";

    if (hasEmail) return res.status(400).send("oad");

    let inserUser = modelo({
      name,
      email,
      lastName,
      password,
      confirmPassword,
      contact
    })
      .save()
      .then(_ => res.status(200).send())
      .catch(err => res.status(500).send("Erro"));
  };
  //
  return { saveUser };
};
