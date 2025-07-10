import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService extends Repository<User>{
    constructor(private readonly dataSource:DataSource){
        super(User,dataSource.createEntityManager())
    }

    async creatUser(data:UserDto){
        const user = this.create(data)
        return await this.save(user)


    }
  
}

