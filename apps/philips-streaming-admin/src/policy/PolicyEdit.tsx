import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PolicyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="coverageAmount" source="coverageAmount" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="policyHolderName" source="policyHolderName" />
        <TextInput label="policyNumber" source="policyNumber" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
