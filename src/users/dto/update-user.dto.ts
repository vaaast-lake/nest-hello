import { IsEmail, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsEmail()
    @IsOptional()
    readonly email?: string;

    @IsNumber()
    @Min(1)
    @Max(120)
    @IsOptional()
    readonly age?: number;
}