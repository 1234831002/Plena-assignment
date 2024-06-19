import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: environment.dbURI,
        dbName: environment.dbName,
        user: environment.dbUsername,
        pass: environment.dbPassword,
      }),
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
