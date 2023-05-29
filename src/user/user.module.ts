import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.interface';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [UserModule, TypeOrmModule.forFeature([User])],
})
export class UserModule {}
