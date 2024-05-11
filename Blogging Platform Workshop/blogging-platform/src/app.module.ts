import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { PostModule } from './post/post.module';
import { PostsModule } from './posts/posts.module';
import { UserprofilesModule } from './userprofiles/userprofiles.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PostModule,
    PostsModule,
    UserprofilesModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      useValue: {
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      },
    },
  ],
})
export class AppModule {}
