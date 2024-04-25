import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAgentProfileDto {
  @IsNotEmpty()
  @IsNumber()
  readonly yearsOfExperience: number;

  @IsNotEmpty()
  @IsString()
  readonly specialty: string;
}
