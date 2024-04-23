import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Agent } from 'src/agent/entities/agent.entity';

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

  @ManyToOne(() => Agent, (agent) => agent.properties)
  agent: Agent;
}
