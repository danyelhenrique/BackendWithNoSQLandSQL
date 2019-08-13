const bcrypt = require("bcrypt");

module.exports = app => {
  const { existOrErro, equalsOrError } = app.config.validation;
  const { validatePassword, hasCaracter } = app.config.validation;
  //

  const saveUser = async (req, res) => {
    const { name, email, lastName } = req.body;
    const { password, contact } = req.body;

    //

    try {
      existOrErro(name, "Name not informed");
      existOrErro(email, "E-mail not informed");
      existOrErro(lastName, " Last name not informed");
      existOrErro(password, "Password not informed");
      existOrErro(req.body.confirmPassword, "Confirm Password not informed");
      existOrErro(contact, "Contact not informed");
      //
      validatePassword(password, "Password must contain letters and numbers");
      hasCaracter(email, "Format E-mail invalid");
      //
      equalsOrError(
        password,
        req.body.confirmPassword,
        "Confimation password Fail"
      );
      delete req.body.confirmPassword;
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const { modelo } = app.models.mongodb;

    console.log(req.body.confirmPassword);

    const passwordToString = await JSON.stringify(password);
    const saltPassword = await bcrypt.genSaltSync(10);
    const encryptPassword = await bcrypt.hashSync(
      passwordToString,
      saltPassword
    );

    let inserUser = modelo({
      name,
      email,
      lastName,
      encryptPassword,
      contact
    })
      .save()
      .then(_ => res.status(200).send())
      .catch(err => res.status(500).send(err));
  };
  //
  return { saveUser };
};
