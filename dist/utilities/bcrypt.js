import bcrypt from "bcrypt";
const hashpassword = async (password) => {
    return bcrypt.hash(password, 12);
};
const comparePassword = async (password, hashpassword) => {
    return bcrypt.compare(password, hashpassword);
};
export { hashpassword, comparePassword };
//# sourceMappingURL=bcrypt.js.map