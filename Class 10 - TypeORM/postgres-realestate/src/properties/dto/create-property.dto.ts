import { IsNumber, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsNumber()
  readonly price: number;

  @IsString()
  readonly location: string;

  @IsString()
  readonly description: string;
}
