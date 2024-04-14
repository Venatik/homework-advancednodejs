import { IsString } from 'class-validator';
import { CreateTrainerDto } from './create-trainer.dto';

export class TrainerDto extends CreateTrainerDto {
  @IsString()
  readonly id: string;
}
