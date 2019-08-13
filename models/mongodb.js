module.exports = app => {
  const cadastroSchema = new app.mongoose.Schema(
    {
      name: String,
      email: {
        type: String,
        unique: true
      },

      lastName: String,

      encryptPassword: {
        type: String,
        select: false
      },

      contact: String
    },
    { timestamps: true }
  );

  const modelo = app.mongoose.model("cadastro", cadastroSchema);

  return { modelo };
};
