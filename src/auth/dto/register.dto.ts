import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  email: string;

  @IsString({ message: '비밀번호는 문자열이어야 합니다.' })
  @MinLength(6, { message: '비밀번호는 최소 6자 이상이어야합니다.' })
  password: string;

  @IsString({ message: '이름은 문자열이어야 합니다.' })
  name: string;

  @IsOptional()
  @IsNumber({}, { message: '나이는 숫자여야 합니다.' })
  age?: number;
}
