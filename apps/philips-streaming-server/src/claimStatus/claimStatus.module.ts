import { Module } from "@nestjs/common";
import { ClaimStatusModuleBase } from "./base/claimStatus.module.base";
import { ClaimStatusService } from "./claimStatus.service";
import { ClaimStatusController } from "./claimStatus.controller";
import { ClaimStatusResolver } from "./claimStatus.resolver";

@Module({
  imports: [ClaimStatusModuleBase],
  controllers: [ClaimStatusController],
  providers: [ClaimStatusService, ClaimStatusResolver],
  exports: [ClaimStatusService],
})
export class ClaimStatusModule {}
