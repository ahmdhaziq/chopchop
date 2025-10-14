import { user } from "../generated/prisma";
export declare class UserRepository {
    findAllUser(): Promise<user[]>;
    findUserById(id: number): Promise<any>;
    createUser(data: {
        name: string;
        email: string;
        password: string;
    }): Promise<any>;
}
//# sourceMappingURL=user.repository.d.ts.map