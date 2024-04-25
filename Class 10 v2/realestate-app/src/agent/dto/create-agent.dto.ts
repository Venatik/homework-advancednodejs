import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAgentProfileDto } from 'src/agent-profiles/dto/create-agent-profile.dto';

export class CreateAgentDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly agency: string;

  @ValidateNested()
  @IsObject()
  @Type(() => CreateAgentProfileDto)
  profile: CreateAgentProfileDto;
}
