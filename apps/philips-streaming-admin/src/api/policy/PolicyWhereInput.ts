import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PolicyWhereInput = {
  coverageAmount?: FloatNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  policyHolderName?: StringNullableFilter;
  policyNumber?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
