import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PolicyServiceBase } from "./base/policy.service.base";

@Injectable()
export class PolicyService extends PolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
