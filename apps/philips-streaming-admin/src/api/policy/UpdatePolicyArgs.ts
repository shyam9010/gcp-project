import { PolicyWhereUniqueInput } from "./PolicyWhereUniqueInput";
import { PolicyUpdateInput } from "./PolicyUpdateInput";

export type UpdatePolicyArgs = {
  where: PolicyWhereUniqueInput;
  data: PolicyUpdateInput;
};
