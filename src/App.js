import "./App.css";

import { CatalogueProvider } from "./providers/catologue";

import Routes from "./routes";
import { FormaturaProvider } from "./providers/formatura";
import { CasamentoProvider } from "./providers/casamento";
import { ConfraternizacaoProvider } from "./providers/confraternizacao";
function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <FormaturaProvider>
          <CasamentoProvider>
            <ConfraternizacaoProvider>
              <Routes />
            </ConfraternizacaoProvider>
          </CasamentoProvider>
        </FormaturaProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
