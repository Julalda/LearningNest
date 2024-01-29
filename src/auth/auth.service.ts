import { Injectable } from '@nestjs/common';
import { PrismaService } from "prisma/prisma.service";
import * as argon from 'argon2';
import { User, Bookmark } from '../types/prisma-types';
import { AuthDto } from './dto';



@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService) {} 

    test() {}
    
    async signup(dto: AuthDto) {

        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
                
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
            },
        });
        return user;
        
        
    }
    signin() {
        return { msg : 'I have signed in !'}
    }
    
    
}