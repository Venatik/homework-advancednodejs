import { AgentProfile } from 'src/agent-profiles/entities/agent-profile.entity';
import { Property } from 'src/property/entities/property.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  agency: string;

  @OneToMany(() => Property, (property) => property.agent, { cascade: true })
  properties: Property[];

  @OneToOne(() => AgentProfile, (profile) => profile.agent, { cascade: true })
  @JoinColumn()
  profile: AgentProfile;
}
