export const checkValidateData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isFullName = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/.test(name);

  if (!isFullName) return "Full Name is not Valid";
  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
