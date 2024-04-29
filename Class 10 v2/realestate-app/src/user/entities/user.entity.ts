import { Role } from 'src/util/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

// {
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYm9AYm9iby5jb20iLCJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDM4MDM0MiwiZXhwIjoxNzE0MzgyMTQyfQ.mSIShIaQFwB9jSKSGoK-419Vf1XNxB_j__2QwDtZ8gg"
// }
