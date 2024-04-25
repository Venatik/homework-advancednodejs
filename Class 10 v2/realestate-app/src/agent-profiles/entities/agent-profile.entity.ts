import { Agent } from 'src/agent/entities/agent.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgentProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  yearsOfExperience: number;

  @Column()
  specialty: string;

  @OneToOne(() => Agent, (agent) => agent.profile)
  agent: Agent;
}
