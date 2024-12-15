export const checkValidateData = (email, password) => {
    const isVaildEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/.test(password);

    if(!isVaildEmail) return "Email is not valid.";
    if(!isValidPassword) return "Password is not valid";

    return null;
}