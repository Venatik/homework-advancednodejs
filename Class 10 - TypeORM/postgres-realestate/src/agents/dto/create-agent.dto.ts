import { IsString } from 'class-validator';

export class CreateAgentDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly phoneNumber: string;

  @IsString()
  readonly agency: string;
}
