/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, InsuranceClaim as PrismaInsuranceClaim } from "@prisma/client";

export class InsuranceClaimServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InsuranceClaimCountArgs, "select">
  ): Promise<number> {
    return this.prisma.insuranceClaim.count(args);
  }

  async insuranceClaims<T extends Prisma.InsuranceClaimFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceClaimFindManyArgs>
  ): Promise<PrismaInsuranceClaim[]> {
    return this.prisma.insuranceClaim.findMany<Prisma.InsuranceClaimFindManyArgs>(
      args
    );
  }
  async insuranceClaim<T extends Prisma.InsuranceClaimFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceClaimFindUniqueArgs>
  ): Promise<PrismaInsuranceClaim | null> {
    return this.prisma.insuranceClaim.findUnique(args);
  }
  async createInsuranceClaim<T extends Prisma.InsuranceClaimCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceClaimCreateArgs>
  ): Promise<PrismaInsuranceClaim> {
    return this.prisma.insuranceClaim.create<T>(args);
  }
  async updateInsuranceClaim<T extends Prisma.InsuranceClaimUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceClaimUpdateArgs>
  ): Promise<PrismaInsuranceClaim> {
    return this.prisma.insuranceClaim.update<T>(args);
  }
  async deleteInsuranceClaim<T extends Prisma.InsuranceClaimDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceClaimDeleteArgs>
  ): Promise<PrismaInsuranceClaim> {
    return this.prisma.insuranceClaim.delete(args);
  }
}
