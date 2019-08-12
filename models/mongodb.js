module.exports = app => {
  const cadastroSchema = new app.mongoose.Schema(
    {
      name: String,
      email: {
        type: String,
        unique: true
      },

      lastName: String,

      password: {
        type: String,
        select: false
      },

      confirmPassword: String,
      contact: String
    },
    { timestamps: true }
  );

  const modelo = app.mongoose.model("cadastro", cadastroSchema);

  return { modelo };
};
