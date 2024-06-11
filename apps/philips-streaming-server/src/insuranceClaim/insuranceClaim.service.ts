import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsuranceClaimServiceBase } from "./base/insuranceClaim.service.base";

@Injectable()
export class InsuranceClaimService extends InsuranceClaimServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
