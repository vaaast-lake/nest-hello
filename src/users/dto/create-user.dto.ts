import {
  IsNotEmpty,
  IsString,
  Min,
  IsNumber,
  Max,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  @Min(1)
  @Max(120)
  readonly age: number;
}
