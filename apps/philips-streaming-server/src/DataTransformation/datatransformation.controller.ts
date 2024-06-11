import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataTransformationService } from "./datatransformation.service";
import { DataProcRequest } from "../dataTransformation/DataProcRequest";
import { BigQueryResponse } from "../dataTransformation/BigQueryResponse";
import { GenerateReportsResponse } from "../dataTransformation/GenerateReportsResponse";
import { TransformInsuranceDataInput } from "../dataTransformation/TransformInsuranceDataInput";

@swagger.ApiTags("dataTransformations")
@common.Controller("dataTransformations")
export class DataTransformationController {
  constructor(protected readonly service: DataTransformationService) {}

  @common.Get("/fetchDataFromBigQuery")
  @swagger.ApiOkResponse({
    type: BigQueryResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchDataFromBigQuery(
    @common.Body()
    body: DataProcRequest
  ): Promise<BigQueryResponse> {
        return this.service.FetchDataFromBigQuery(body);
      }

  @common.Post("/generateReports")
  @swagger.ApiOkResponse({
    type: GenerateReportsResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateReports(
    @common.Body()
    body: DataProcRequest
  ): Promise<GenerateReportsResponse> {
        return this.service.GenerateReports(body);
      }

  @common.Post("/storeResultsInBigQuery")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StoreResultsInBigQuery(
    @common.Body()
    body: DataProcRequest
  ): Promise<string> {
        return this.service.StoreResultsInBigQuery(body);
      }

  @common.Post("/transformInsuranceData")
  @swagger.ApiOkResponse({
    type: TransformInsuranceDataInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TransformInsuranceData(
    @common.Body()
    body: DataProcRequest
  ): Promise<TransformInsuranceDataInput> {
        return this.service.TransformInsuranceData(body);
      }

  @common.Post("/triggerDataProcProcessing")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TriggerDataProcProcessing(
    @common.Body()
    body: DataProcRequest
  ): Promise<string> {
        return this.service.TriggerDataProcProcessing(body);
      }
}
