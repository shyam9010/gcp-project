import { Module } from "@nestjs/common";
import { DataTransformationService } from "./datatransformation.service";
import { DataTransformationController } from "./datatransformation.controller";
import { DataTransformationResolver } from "./datatransformation.resolver";

@Module({
  controllers: [DataTransformationController],
  providers: [DataTransformationService, DataTransformationResolver],
  exports: [DataTransformationService],
})
export class DataTransformationModule {}
