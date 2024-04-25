import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgentProfilesService } from './agent-profiles.service';
import { CreateAgentProfileDto } from './dto/create-agent-profile.dto';
import { UpdateAgentProfileDto } from './dto/update-agent-profile.dto';

@Controller('agent-profiles')
export class AgentProfilesController {
  // constructor(private readonly agentProfilesService: AgentProfilesService) {}
  // @Post()
  // create(@Body() createAgentProfileDto: CreateAgentProfileDto) {
  //   return this.agentProfilesService.create(createAgentProfileDto);
  // }
  // @Get()
  // findAll() {
  //   return this.agentProfilesService.findAll();
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.agentProfilesService.findOne(+id);
  // }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAgentProfileDto: UpdateAgentProfileDto) {
  //   return this.agentProfilesService.update(+id, updateAgentProfileDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.agentProfilesService.remove(+id);
  // }
}
