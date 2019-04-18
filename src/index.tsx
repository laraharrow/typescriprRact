import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/HelloWithState';

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  // adding "as HTMLElement" does the type assertion for typeScript.
  // we could have used the !(bang) instead and that jsut means not null || undefined
  // doing it with "as HTMLElement" is a bit more specific!
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

