import { Policy as TPolicy } from "../api/policy/Policy";

export const POLICY_TITLE_FIELD = "policyHolderName";

export const PolicyTitle = (record: TPolicy): string => {
  return record.policyHolderName?.toString() || String(record.id);
};
