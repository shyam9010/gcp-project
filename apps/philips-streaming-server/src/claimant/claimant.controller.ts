import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClaimantService } from "./claimant.service";
import { ClaimantControllerBase } from "./base/claimant.controller.base";

@swagger.ApiTags("claimants")
@common.Controller("claimants")
export class ClaimantController extends ClaimantControllerBase {
  constructor(protected readonly service: ClaimantService) {
    super(service);
  }
}
