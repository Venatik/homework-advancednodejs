import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agent } from 'src/agent/entities/agent.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

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
  @JoinColumn({ name: 'agentId' })
  agent: Agent;

  @OneToMany(() => Reservation, (reservation) => reservation.property, {
    cascade: true,
  })
  reservations: Reservation[];

  @Column()
  agentId: number;
}
