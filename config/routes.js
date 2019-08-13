module.exports = app => {
  app
    .route("/user") // //
    .post(app.controllers.saveUser.saveUser)
    .get(app.controllers.getUser.getUser); // get all users

  app
    .route("/user/:id") // //
    .get(app.controllers.getUser.getUser) // id on params request or body
    .delete(app.controllers.deleteUser.DeleteUser);
};
