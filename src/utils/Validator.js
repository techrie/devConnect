const validator = require("validator");

const validateSignupData = (req) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Enter valid firstName and lastName");
  } else if (!validator.isEmail(email)) {
    throw new Error("Enter valid email");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter strong password");
  }
};

const validateEditProfileData = (req) => {
  const { firstName, lastName, age, gender, photoUrl, skills, about } =
    req.body;
  const ALLOWED_FIELDS = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "skills",
    "about",
  ];

  if (skills.length > 10) {
    throw new Error("Skills cannot be more than 10");
  }

  // if (!validator.isURL(photoUrl)) {
  //   throw new Error("Invalid photo URL");
  // }

  if (about.length > 40) {
    throw new Error("about cannot exceed 40 characters!");
  }

  const isEditAllowed = Object.keys(req.body).every((field) =>
    ALLOWED_FIELDS.includes(field)
  );

  return isEditAllowed;
};

module.exports = { validateSignupData, validateEditProfileData };
