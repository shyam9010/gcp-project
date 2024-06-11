import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InsuranceClaimWhereInput = {
  claimAmount?: FloatNullableFilter;
  claimDate?: DateTimeNullableFilter;
  id?: StringFilter;
  policyNumber?: StringNullableFilter;
  status?: "Option1";
};
