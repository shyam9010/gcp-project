import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class DataProcRequest {
    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { DataProcRequest as DataProcRequest };