import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Modules from '@/modules';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // tất cả module có thể sử dụng ConfigService mà không cần import ConfigModule
    Modules.ClassesModule,
    Modules.StudentsModule,
    Modules.TeachersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
