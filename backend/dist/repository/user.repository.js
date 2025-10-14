"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UserRepository {
    async findAllUser() {
        return prisma_1.default.user.findMany();
    }
    async findUserById(id) {
        return prisma_1.default.user.findUnique({
            where: {
                id: id,
            }
        });
    }
    async createUser(data) {
        return prisma_1.default.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map