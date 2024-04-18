import { IsNumber } from 'class-validator';
import { CreatePropertyDto } from './create-property.dto';

export class PropertyDto extends CreatePropertyDto {
  @IsNumber()
  readonly id: number;
}
