import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './entity/user.entity';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'alswo0613!',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProfileModule,
    PhotoModule,
  ]
})
export class AppModule {
  constructor(private connection:Connection){}
}
