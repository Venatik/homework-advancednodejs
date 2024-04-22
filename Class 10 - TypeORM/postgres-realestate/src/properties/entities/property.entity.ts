import { Agent } from 'src/agents/entities/agent.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column()
  location: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  agentId: number;

  // @OneToMany(() => Agent, (agent) => agent.property)
  // agents: Agent[];

  @ManyToOne(() => Agent, (agent) => agent.properties)
  @JoinColumn({ name: 'agentId' })
  agent: Agent;
}
