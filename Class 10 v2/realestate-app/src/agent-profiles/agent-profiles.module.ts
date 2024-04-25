import { Module } from '@nestjs/common';
import { AgentProfilesService } from './agent-profiles.service';
import { AgentProfilesController } from './agent-profiles.controller';

@Module({
  controllers: [AgentProfilesController],
  providers: [AgentProfilesService],
})
export class AgentProfilesModule {}
