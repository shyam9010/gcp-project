import * as graphql from "@nestjs/graphql";
import { ClaimStatusResolverBase } from "./base/claimStatus.resolver.base";
import { ClaimStatus } from "./base/ClaimStatus";
import { ClaimStatusService } from "./claimStatus.service";

@graphql.Resolver(() => ClaimStatus)
export class ClaimStatusResolver extends ClaimStatusResolverBase {
  constructor(protected readonly service: ClaimStatusService) {
    super(service);
  }
}
