import { PrismaService } from "prisma/prisma.service";
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    test(): void;
    signup(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
    }>;
    signin(): {
        msg: string;
    };
}
