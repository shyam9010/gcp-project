import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PolicyList } from "./policy/PolicyList";
import { PolicyCreate } from "./policy/PolicyCreate";
import { PolicyEdit } from "./policy/PolicyEdit";
import { PolicyShow } from "./policy/PolicyShow";
import { InsuranceClaimList } from "./insuranceClaim/InsuranceClaimList";
import { InsuranceClaimCreate } from "./insuranceClaim/InsuranceClaimCreate";
import { InsuranceClaimEdit } from "./insuranceClaim/InsuranceClaimEdit";
import { InsuranceClaimShow } from "./insuranceClaim/InsuranceClaimShow";
import { ClaimStatusList } from "./claimStatus/ClaimStatusList";
import { ClaimStatusCreate } from "./claimStatus/ClaimStatusCreate";
import { ClaimStatusEdit } from "./claimStatus/ClaimStatusEdit";
import { ClaimStatusShow } from "./claimStatus/ClaimStatusShow";
import { ClaimantList } from "./claimant/ClaimantList";
import { ClaimantCreate } from "./claimant/ClaimantCreate";
import { ClaimantEdit } from "./claimant/ClaimantEdit";
import { ClaimantShow } from "./claimant/ClaimantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"philips_streaming"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Policy"
          list={PolicyList}
          edit={PolicyEdit}
          create={PolicyCreate}
          show={PolicyShow}
        />
        <Resource
          name="InsuranceClaim"
          list={InsuranceClaimList}
          edit={InsuranceClaimEdit}
          create={InsuranceClaimCreate}
          show={InsuranceClaimShow}
        />
        <Resource
          name="ClaimStatus"
          list={ClaimStatusList}
          edit={ClaimStatusEdit}
          create={ClaimStatusCreate}
          show={ClaimStatusShow}
        />
        <Resource
          name="Claimant"
          list={ClaimantList}
          edit={ClaimantEdit}
          create={ClaimantCreate}
          show={ClaimantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
