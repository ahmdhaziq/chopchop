import prisma from "../prisma";
import { user } from "../generated/prisma";
import { UserService } from "../services/user.service";
import { Request, Response } from "express";
import  bcrypt  from "bcrypt";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    listUser = async (req: Request, res: Response): Promise<void> => {
        try {
        const users = await this.userService.getListUsers();
        res.status(200).json(users);
        } catch (error:  unknown | any) {
            res.status(500).json({error: error.message});
        }
    }

    getUserByID = async (req: Request, res: Response): Promise<void> => {
        let id: number = Number(req.params.id);
        try {
            const user = await this.userService.getUserById(id);
            res.status(200).json(user);
        } catch (error: unknown | any) {
            res.status(500).json({error: error.message});
        }
    }

    registerUser = async (req: Request, res: Response): Promise<void> => {
        let name: string = req.body.name;
        let email: string = req.body.email;
        let hashedPassword: string = await bcrypt.hash(req.body.password,10);
        try {
            const user = await this.userService.registerUser(name, email, hashedPassword);
            res.status(200).json(user);
        } catch (error: unknown | any) {
            res.status(500).json({error: error.message});
        }
    }

    
}