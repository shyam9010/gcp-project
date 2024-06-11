import { PolicyWhereInput } from "./PolicyWhereInput";
import { PolicyOrderByInput } from "./PolicyOrderByInput";

export type PolicyFindManyArgs = {
  where?: PolicyWhereInput;
  orderBy?: Array<PolicyOrderByInput>;
  skip?: number;
  take?: number;
};
