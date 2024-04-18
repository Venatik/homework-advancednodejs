import { Property } from 'src/properties/entities/property.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => Property, (property) => property.agents, { cascade: true })
  @JoinColumn({ name: 'propertyId' })
  property: Property;

  @Column()
  propertyId: number;
}
