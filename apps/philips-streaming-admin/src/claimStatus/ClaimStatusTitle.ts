import { ClaimStatus as TClaimStatus } from "../api/claimStatus/ClaimStatus";

export const CLAIMSTATUS_TITLE_FIELD = "name";

export const ClaimStatusTitle = (record: TClaimStatus): string => {
  return record.name?.toString() || String(record.id);
};
