import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
    }>;
    Signin(): {
        msg: string;
    };
}
