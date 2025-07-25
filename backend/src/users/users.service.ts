import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';
import { UsersCreateDto, UsersLoginDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(data: UsersCreateDto): Promise<User> {
    const createdUser = new this.userModel(data);
    return createdUser.save();
  }

  login(data: UsersLoginDto): Promise<User | null> {
    const { email, password } = data;
    return this.userModel.findOne({ email, password }).exec();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }
}
