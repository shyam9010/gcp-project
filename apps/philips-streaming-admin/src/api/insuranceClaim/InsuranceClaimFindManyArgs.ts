import { InsuranceClaimWhereInput } from "./InsuranceClaimWhereInput";
import { InsuranceClaimOrderByInput } from "./InsuranceClaimOrderByInput";

export type InsuranceClaimFindManyArgs = {
  where?: InsuranceClaimWhereInput;
  orderBy?: Array<InsuranceClaimOrderByInput>;
  skip?: number;
  take?: number;
};
