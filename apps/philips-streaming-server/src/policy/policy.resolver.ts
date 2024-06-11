import * as graphql from "@nestjs/graphql";
import { PolicyResolverBase } from "./base/policy.resolver.base";
import { Policy } from "./base/Policy";
import { PolicyService } from "./policy.service";

@graphql.Resolver(() => Policy)
export class PolicyResolver extends PolicyResolverBase {
  constructor(protected readonly service: PolicyService) {
    super(service);
  }
}
