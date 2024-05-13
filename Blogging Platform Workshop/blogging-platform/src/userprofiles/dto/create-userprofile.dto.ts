import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserprofileDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;
}
