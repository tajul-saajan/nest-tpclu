import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: Joi.object({
        MYSQL_DB: Joi.string().required(),
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_USER: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthModule,
    TaskModule,
    PostModule,
    CommentModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
