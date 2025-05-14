// apps/api/src/auth/dto/request-otp.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class RequestOtpDto {
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}