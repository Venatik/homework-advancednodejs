import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  propertyId: number;

  @Column()
  customerId: number;

  @Column()
  checkIn: Date;

  @Column()
  checkOut: Date;

  @Column()
  status: string;
}
