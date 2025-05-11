import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  recommendId(name: string) {
    const randomNumber = Math.floor(100 + Math.random() * 900);
    return `${name}${randomNumber}`;
  }

  createUser(userId: string) {
    const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    return `Create Success : ${userId} (${now})`;
  }
}
