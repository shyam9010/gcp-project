import { Module } from "@nestjs/common";
import { InsuranceClaimModuleBase } from "./base/insuranceClaim.module.base";
import { InsuranceClaimService } from "./insuranceClaim.service";
import { InsuranceClaimController } from "./insuranceClaim.controller";
import { InsuranceClaimResolver } from "./insuranceClaim.resolver";

@Module({
  imports: [InsuranceClaimModuleBase],
  controllers: [InsuranceClaimController],
  providers: [InsuranceClaimService, InsuranceClaimResolver],
  exports: [InsuranceClaimService],
})
export class InsuranceClaimModule {}
