import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  Length,
  NotContains,
  MaxLength,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsPhoneNumber('EG')
  @MinLength(11, { message: 'phone number must be 11 at least nunbers' })
  @MaxLength(11, { message: 'phone number must be 11 at most nunbers' })
  @NotContains(' ', { message: 'no space allowed' })
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @MinLength(6)
  @MaxLength(80)
  @NotContains(' ', { message: 'no space allowed' })
  password: string;
}
