import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsuranceClaimService } from "./insuranceClaim.service";
import { InsuranceClaimControllerBase } from "./base/insuranceClaim.controller.base";

@swagger.ApiTags("insuranceClaims")
@common.Controller("insuranceClaims")
export class InsuranceClaimController extends InsuranceClaimControllerBase {
  constructor(protected readonly service: InsuranceClaimService) {
    super(service);
  }
}
