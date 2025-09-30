import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @Min(1)
    @IsPositive()
    limit?: number;

    @IsOptional()
   
    offset?: number;
}