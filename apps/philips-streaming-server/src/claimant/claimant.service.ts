import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClaimantServiceBase } from "./base/claimant.service.base";

@Injectable()
export class ClaimantService extends ClaimantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
