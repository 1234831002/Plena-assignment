import { IsArray, IsBoolean, IsDate, IsPositive, IsString, Length } from 'class-validator';

export class UserDto {
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    userName: string;

    @IsDate()
    birthdate: Date;

    @IsArray()
    blockerUsers: Array<string>;

    id?: string;
}