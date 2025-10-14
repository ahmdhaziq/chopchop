import prisma from "../prisma";
import { user } from "../generated/prisma";


export class UserRepository {

    async findAllUser() {
        return prisma.user.findMany({
            omit: {
                password: true
            }
        });
    }

    async findUserById(id: number){
        return prisma.user.findUnique({
            where: {
                id: id,
            }
        })
    }

    async createUser(data: {name: string;email: string;password: string}){
        return prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
    }

}