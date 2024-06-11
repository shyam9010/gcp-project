import { Claimant as TClaimant } from "../api/claimant/Claimant";

export const CLAIMANT_TITLE_FIELD = "fullName";

export const ClaimantTitle = (record: TClaimant): string => {
  return record.fullName?.toString() || String(record.id);
};
