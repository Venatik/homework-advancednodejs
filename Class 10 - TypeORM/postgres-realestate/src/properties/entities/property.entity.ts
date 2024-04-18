import { Agent } from 'src/agents/entities/agent.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Agent, (agent) => agent.property)
  agents: Agent[];
}
