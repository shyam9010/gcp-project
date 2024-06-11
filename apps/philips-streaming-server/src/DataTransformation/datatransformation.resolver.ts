import * as graphql from "@nestjs/graphql";
import { BigQueryResponse } from "../dataTransformation/BigQueryResponse";
import { DataProcRequest } from "../dataTransformation/DataProcRequest";
import { GenerateReportsResponse } from "../dataTransformation/GenerateReportsResponse";
import { TransformInsuranceDataInput } from "../dataTransformation/TransformInsuranceDataInput";
import { DataTransformationService } from "./datatransformation.service";

export class DataTransformationResolver {
  constructor(protected readonly service: DataTransformationService) {}

  @graphql.Query(() => BigQueryResponse)
  async FetchDataFromBigQuery(
    @graphql.Args()
    args: string
  ): Promise<BigQueryResponse> {
    return this.service.FetchDataFromBigQuery(args);
  }

  @graphql.Mutation(() => GenerateReportsResponse)
  async GenerateReports(
    @graphql.Args()
    args: DataProcRequest
  ): Promise<GenerateReportsResponse> {
    return this.service.GenerateReports(args);
  }

  @graphql.Mutation(() => String)
  async StoreResultsInBigQuery(
    @graphql.Args()
    args: GenerateReportsResponse
  ): Promise<string> {
    return this.service.StoreResultsInBigQuery(args);
  }

  @graphql.Mutation(() => TransformInsuranceDataInput)
  async TransformInsuranceData(
    @graphql.Args()
    args: TransformInsuranceDataInput
  ): Promise<TransformInsuranceDataInput> {
    return this.service.TransformInsuranceData(args);
  }

  @graphql.Mutation(() => String)
  async TriggerDataProcProcessing(
    @graphql.Args()
    args: DataProcRequest
  ): Promise<string> {
    return this.service.TriggerDataProcProcessing(args);
  }
}
