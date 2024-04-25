import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { Agent } from './entities/agent.entity';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @ApiOperation({ summary: 'Retrieves all agents.' })
  @ApiOkResponse({
    type: [Agent],
    description: 'All agents retrieved successfully.',
  })
  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
  })
  @ApiQuery({
    name: 'agency',
    required: false,
  })
  findAll(@Query('name') name: string, @Query('agency') agency: string) {
    return this.agentService.findAll(name, agency);
  }

  @ApiOperation({ summary: 'Retrieves an agent by ID.' })
  @ApiOkResponse({
    type: Agent,
    description: 'Agent retrieved successfully.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentService.findOne(+id);
  }

  @ApiOperation({ summary: 'Creates an agent.' })
  @ApiCreatedResponse({
    type: Agent,
    description: 'Agent created successfully.',
  })
  @Post()
  create(@Body() createAgentDto: CreateAgentDto) {
    return this.agentService.create(createAgentDto);
  }

  @ApiOperation({ summary: 'Updates an agent by ID.' })
  @ApiOkResponse({
    type: Agent,
    description: 'Agent updated successfully.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) {
    return this.agentService.update(+id, updateAgentDto);
  }

  @ApiOperation({ summary: 'Deletes an agent by ID.' })
  @ApiOkResponse({
    type: Agent,
    description: 'Agent deleted successfully.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentService.remove(+id);
  }
}
