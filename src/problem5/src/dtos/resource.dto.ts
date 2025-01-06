import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateResourceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export interface ResourceFilters {
  name?: string;
  limit?: number;
  offset?: number;
}
