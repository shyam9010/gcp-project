import { Module } from "@nestjs/common";
import { ClaimantModuleBase } from "./base/claimant.module.base";
import { ClaimantService } from "./claimant.service";
import { ClaimantController } from "./claimant.controller";
import { ClaimantResolver } from "./claimant.resolver";

@Module({
  imports: [ClaimantModuleBase],
  controllers: [ClaimantController],
  providers: [ClaimantService, ClaimantResolver],
  exports: [ClaimantService],
})
export class ClaimantModule {}
