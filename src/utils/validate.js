export const checkValidateData = (email, password, name = "") => {
    const isVaildEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,32}$/.test(password);
    
    const isNameVaild = /^[a-zA-Z]+$/.test(name);

    if(!isVaildEmail) return "Email is not valid.";
    if(name && !isNameVaild) return "Please enter valid name."
    if(!isValidPassword) return "Password is not valid - must be 8-32 characters and contain at least one number, uppercase letter, lowercase letter, and special character";

    return null;
}
