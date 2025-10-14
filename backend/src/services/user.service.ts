import { UserRepository } from "../repository/user.repository";
import { user } from "../generated/prisma";

export class UserService {
   private userRepo: UserRepository;

   constructor() {
      this.userRepo = new UserRepository();
   }

   async getListUsers() {
      return this.userRepo.findAllUser();
   }

   async getUserById(id: number): Promise<user | null> {
      return this.userRepo.findUserById(id) ?? null;
   }

   async registerUser(name: string, email: string, password: string): Promise<user> {
      return this.userRepo.createUser({name, email, password});
   }
   
}