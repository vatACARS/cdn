import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'content'),
      serveRoot: "/",
      serveStaticOptions: {
        index: false
      }
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}