import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("BigQueryResponseObject")
class BigQueryResponse {
    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { BigQueryResponse as BigQueryResponse };