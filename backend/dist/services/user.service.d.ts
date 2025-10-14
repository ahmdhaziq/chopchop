import { user } from "../generated/prisma";
export declare class UserService {
    private userRepo;
    constructor();
    getListUsers(): Promise<user[]>;
    getUserById(id: number): Promise<user | null>;
    registerUser(name: string, email: string, password: string): Promise<user>;
}
//# sourceMappingURL=user.service.d.ts.map