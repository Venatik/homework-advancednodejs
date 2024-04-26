import { Property } from 'src/property/entities/property.entity';
import { ReservationStatus } from 'src/util/reservation.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Property, (property) => property.reservations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'propertyId' })
  property: Property;

  @Column()
  customerName: string;

  @Column({ type: 'date', nullable: true }) // nullable za testiranje
  checkIn: Date;

  @Column({ type: 'date', nullable: true })
  checkOut: Date;

  @Column({ type: 'enum', enum: ReservationStatus })
  status: ReservationStatus;
}
