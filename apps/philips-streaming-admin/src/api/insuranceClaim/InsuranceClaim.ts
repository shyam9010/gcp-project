export type InsuranceClaim = {
  claimAmount: number | null;
  claimDate: Date | null;
  createdAt: Date;
  id: string;
  policyNumber: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
