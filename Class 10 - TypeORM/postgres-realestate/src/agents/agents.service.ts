import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
  ) {}

  async findAll(): Promise<Agent[]> {
    return this.agentRepository.find();
  }

  async findOne(id: number): Promise<Agent> {
    try {
      return this.agentRepository.findOneByOrFail({ id });
    } catch (error) {
      if (error.name === 'EntityNotFoundError') {
        throw new NotFoundException(`Agent with ID ${id} not found`);
      }
      throw error;
    }
  }

  async create(createAgentDto: CreateAgentDto): Promise<Agent> {
    const agent = this.agentRepository.create(createAgentDto);
    await this.agentRepository.save(agent);
    return agent;
  }

  async update(id: number, updateAgentDto: UpdateAgentDto): Promise<Agent> {
    let agent = await this.agentRepository.findOneBy({ id });
    agent = this.agentRepository.merge(agent, updateAgentDto);
    await this.agentRepository.save(agent);
    return agent;
  }

  async remove(id: number): Promise<void> {
    const agent = await this.agentRepository.findOneBy({ id });

    if (!agent) {
      throw new NotFoundException(`Agent with ID "${id}" not found`);
    }

    await this.agentRepository.delete(agent);
  }
}
