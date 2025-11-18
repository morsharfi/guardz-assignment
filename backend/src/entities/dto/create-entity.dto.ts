import { IsEmail, IsNotEmpty, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateEntityDto {
  @IsNotEmpty({ message: 'Name is required' })
  name!: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email!: string;

  @IsOptional()
  @IsNumber({}, { message: 'Age must be a number' })
  @Min(0, { message: 'Age must be at least 0' })
  @Max(150, { message: 'Age must be at most 150' })
  age?: number;
}
