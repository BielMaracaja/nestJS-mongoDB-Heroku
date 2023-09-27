import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


//W7cKLRz6EnvoJ8ms

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbUserTest:W7cKLRz6EnvoJ8ms@cluster0.i1jbs6s.mongodb.net/'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}