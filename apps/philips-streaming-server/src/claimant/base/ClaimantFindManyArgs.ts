/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClaimantWhereInput } from "./ClaimantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClaimantOrderByInput } from "./ClaimantOrderByInput";

@ArgsType()
class ClaimantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClaimantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClaimantWhereInput, { nullable: true })
  @Type(() => ClaimantWhereInput)
  where?: ClaimantWhereInput;

  @ApiProperty({
    required: false,
    type: [ClaimantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClaimantOrderByInput], { nullable: true })
  @Type(() => ClaimantOrderByInput)
  orderBy?: Array<ClaimantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClaimantFindManyArgs as ClaimantFindManyArgs };
