import { SortOrder } from "../../util/SortOrder";

export type InsuranceClaimOrderByInput = {
  claimAmount?: SortOrder;
  claimDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  policyNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
