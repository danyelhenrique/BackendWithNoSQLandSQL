module.exports = app => {
  app
    .route("/user") // //
    .post(app.controllers.saveUser.saveUser)
    .get(app.controllers.getUser.getUser); // id on body request

  app
    .route("/user/:id") // //
    .get(app.controllers.getUser.getUser); // id on params request

  // return { app };
};
