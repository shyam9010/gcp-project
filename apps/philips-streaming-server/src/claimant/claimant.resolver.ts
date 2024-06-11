import * as graphql from "@nestjs/graphql";
import { ClaimantResolverBase } from "./base/claimant.resolver.base";
import { Claimant } from "./base/Claimant";
import { ClaimantService } from "./claimant.service";

@graphql.Resolver(() => Claimant)
export class ClaimantResolver extends ClaimantResolverBase {
  constructor(protected readonly service: ClaimantService) {
    super(service);
  }
}
