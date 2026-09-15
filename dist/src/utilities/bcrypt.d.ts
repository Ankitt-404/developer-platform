declare const hashpassword: (password: string) => Promise<string>;
declare const comparePassword: (password: string, hashpassword: string) => Promise<boolean>;
export { hashpassword, comparePassword };
//# sourceMappingURL=bcrypt.d.ts.map