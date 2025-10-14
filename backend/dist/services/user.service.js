"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repository/user.repository");
class UserService {
    constructor() {
        this.userRepo = new user_repository_1.UserRepository();
    }
    async getListUsers() {
        return this.userRepo.findAllUser();
    }
    async getUserById(id) {
        return this.userRepo.findUserById(id) ?? null;
    }
    async registerUser(name, email, password) {
        return this.userRepo.createUser({ name, email, password });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map