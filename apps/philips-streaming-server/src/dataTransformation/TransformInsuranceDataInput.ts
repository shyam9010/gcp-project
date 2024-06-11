import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("TransformInsuranceDataInputObject")
class TransformInsuranceDataInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    policyNumber!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    claimAmount!: number;

    @Field(() => Date)
    @Type(() => Date)
    claimDate!: Date;
}

export { TransformInsuranceDataInput as TransformInsuranceDataInput };