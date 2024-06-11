import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClaimStatusService } from "./claimStatus.service";
import { ClaimStatusControllerBase } from "./base/claimStatus.controller.base";

@swagger.ApiTags("claimStatuses")
@common.Controller("claimStatuses")
export class ClaimStatusController extends ClaimStatusControllerBase {
  constructor(protected readonly service: ClaimStatusService) {
    super(service);
  }
}
