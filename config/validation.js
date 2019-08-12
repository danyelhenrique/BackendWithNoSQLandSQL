module.exports = app => {
  existOrErro = (value, msg) => {
    if (!value) throw msg;
    if (Array.isArray(value) < value.length === 0) throw msg;
  };

  notExistisOrErro = (value, msg) => {
    try {
      existOrErro(value, msg);
    } catch (msg) {
      return;
    }
    throw msg;
  };

  equalsOrError = (valueA, valueB, msg) => {
    if (valueA !== valueB) throw msg;
  };

  validatePassword = (value, msg) => {
    if (!Number(value) && !typeof value === "string") throw msg;
    if (value.length < 10) throw msg;
  };

  hasCaracter = (value, msg) => {
    if (!value.includes("@")) throw msg;
  };

  return {
    existOrErro,
    notExistisOrErro,
    equalsOrError,
    validatePassword,
    hasCaracter
  };
};
