export type InsuranceClaimCreateInput = {
  claimAmount?: number | null;
  claimDate?: Date | null;
  policyNumber?: string | null;
  status?: "Option1" | null;
};
