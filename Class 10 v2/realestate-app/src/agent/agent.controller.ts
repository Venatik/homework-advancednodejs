import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { Agent } from './entities/agent.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guard';
import { Role } from 'src/util/role.enum';
import { Roles } from 'src/decorators/roles.decorators';

@UseGuards(JwtAuthGuard, RoleGuard)
@ApiBearerAuth()
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
  @Roles(Role.Admin)
  create(@Body() createAgentDto: CreateAgentDto) {
    return this.agentService.create(createAgentDto);
  }

  @ApiOperation({ summary: 'Updates an agent by ID.' })
  @ApiOkResponse({
    type: Agent,
    description: 'Agent updated successfully.',
  })
  @Patch(':id')
  @Roles(Role.Admin)
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) {
    return this.agentService.update(+id, updateAgentDto);
  }

  @ApiOperation({ summary: 'Deletes an agent by ID.' })
  @ApiOkResponse({
    type: Agent,
    description: 'Agent deleted successfully.',
  })
  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    return this.agentService.remove(+id);
  }
}
