import { Property } from 'src/properties/entities/property.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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
  phoneNumber: string;

  @Column()
  agency: string;

  // @ManyToOne(() => Property, (property) => property.agents, { cascade: true })
  // @JoinColumn({ name: 'propertyId' })
  // property: Property;

  @OneToMany(() => Property, (property) => property.agent, {
    cascade: true,
    eager: true,
  })
  properties: Property[];
}
