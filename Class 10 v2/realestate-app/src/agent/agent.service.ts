import { Inject, Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { Repository } from 'typeorm';
import { Property } from 'src/property/entities/property.entity';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  async findAll(name?: string, agency?: string): Promise<Agent[]> {
    const where = {};

    if (name) where['name'] = name;
    if (agency) where['agency'] = agency;

    return this.agentRepository.find({ where });
  }

  async findOne(id: number): Promise<Agent> {
    return this.agentRepository.findOneBy({ id });
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
    const agent = await this.agentRepository.findOne({
      where: { id },
      relations: ['properties'],
    });
    if (agent) {
      await this.propertyRepository.remove(agent.properties);
      await this.agentRepository.delete(id);
    }
  }
}
