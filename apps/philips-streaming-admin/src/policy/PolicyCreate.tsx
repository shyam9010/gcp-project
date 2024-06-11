import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PolicyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="coverageAmount" source="coverageAmount" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="policyHolderName" source="policyHolderName" />
        <TextInput label="policyNumber" source="policyNumber" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
