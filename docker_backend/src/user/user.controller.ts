import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
   
    @Post()
    async createUser(@Body() data:UserDto){
        return this.userService.creatUser(data)

    }
}