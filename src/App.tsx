import { Suspense } from "react";
import environment from "./environment";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense>
        <SearchContainer />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
