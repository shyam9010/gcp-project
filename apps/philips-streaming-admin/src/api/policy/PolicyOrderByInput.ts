import { SortOrder } from "../../util/SortOrder";

export type PolicyOrderByInput = {
  coverageAmount?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  policyHolderName?: SortOrder;
  policyNumber?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
