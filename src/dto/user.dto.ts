import { IsArray, IsBoolean, IsDate, IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class UserDto {
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    userName: string;

    @IsDate()
    birthdate: Date;

    @IsBoolean()
    isActive: Boolean;

    @IsArray()
    blockerUsers: Array<string>;

    @IsPositive()
    age:Number

    id?: string;
}