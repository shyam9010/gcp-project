import { ClaimantWhereInput } from "./ClaimantWhereInput";
import { ClaimantOrderByInput } from "./ClaimantOrderByInput";

export type ClaimantFindManyArgs = {
  where?: ClaimantWhereInput;
  orderBy?: Array<ClaimantOrderByInput>;
  skip?: number;
  take?: number;
};
