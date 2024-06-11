import { InsuranceClaim as TInsuranceClaim } from "../api/insuranceClaim/InsuranceClaim";

export const INSURANCECLAIM_TITLE_FIELD = "policyNumber";

export const InsuranceClaimTitle = (record: TInsuranceClaim): string => {
  return record.policyNumber?.toString() || String(record.id);
};
