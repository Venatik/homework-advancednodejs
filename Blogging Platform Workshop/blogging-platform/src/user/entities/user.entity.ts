import { Userprofile } from 'src/userprofiles/entities/userprofile.entity';
import { Role } from 'src/util/role.enum';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @OneToOne(() => Userprofile, (userProfile) => userProfile.user)
  userProfile: Userprofile;
}
