import { Module } from "@nestjs/common";
import { PolicyModuleBase } from "./base/policy.module.base";
import { PolicyService } from "./policy.service";
import { PolicyController } from "./policy.controller";
import { PolicyResolver } from "./policy.resolver";

@Module({
  imports: [PolicyModuleBase],
  controllers: [PolicyController],
  providers: [PolicyService, PolicyResolver],
  exports: [PolicyService],
})
export class PolicyModule {}
