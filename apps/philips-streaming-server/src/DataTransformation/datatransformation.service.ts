import { Injectable } from "@nestjs/common";
import { BigQueryResponse } from "../dataTransformation/BigQueryResponse";
import { DataProcRequest } from "../dataTransformation/DataProcRequest";
import { GenerateReportsResponse } from "../dataTransformation/GenerateReportsResponse";
import { TransformInsuranceDataInput } from "../dataTransformation/TransformInsuranceDataInput";

@Injectable()
export class DataTransformationService {
  constructor() {}
  async FetchDataFromBigQuery(args: string): Promise<BigQueryResponse> {
    throw new Error("Not implemented");
  }
  async GenerateReports(args: DataProcRequest): Promise<GenerateReportsResponse> {
    throw new Error("Not implemented");
  }
  async StoreResultsInBigQuery(args: GenerateReportsResponse): Promise<string> {
    throw new Error("Not implemented");
  }
  async TransformInsuranceData(args: TransformInsuranceDataInput): Promise<TransformInsuranceDataInput> {
    throw new Error("Not implemented");
  }
  async TriggerDataProcProcessing(args: DataProcRequest): Promise<string> {
    throw new Error("Not implemented");
  }
}
