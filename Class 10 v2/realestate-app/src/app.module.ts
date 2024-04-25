import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentModule } from './agent/agent.module';
import { PropertyModule } from './property/property.module';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { AgentProfilesModule } from './agent-profiles/agent-profiles.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AgentModule,
    PropertyModule,
    DatabaseModule,
    AgentProfilesModule,
    ReservationModule,
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
