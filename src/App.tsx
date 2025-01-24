// Libraries
import { LightTheme, BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-monolithic';

//Styles
import './index.css';

// Components
import { HomePage } from './components/HomePage';

const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <HomePage />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
