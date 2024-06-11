import * as graphql from "@nestjs/graphql";
import { InsuranceClaimResolverBase } from "./base/insuranceClaim.resolver.base";
import { InsuranceClaim } from "./base/InsuranceClaim";
import { InsuranceClaimService } from "./insuranceClaim.service";

@graphql.Resolver(() => InsuranceClaim)
export class InsuranceClaimResolver extends InsuranceClaimResolverBase {
  constructor(protected readonly service: InsuranceClaimService) {
    super(service);
  }
}
