import Button from './components/button/Button'
import FloatingInput from './components/floatingInput/FloatingInput'
import getDisplayMessage from './i18n/displayMessage'

import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <Button onClick={() => {}}>{getDisplayMessage('metadataViewer')}</Button>
      <FloatingInput
        label={getDisplayMessage('metadataViewer')}
        name={getDisplayMessage('metadataViewer')}
        value=""
        onChange={() => {}}
      />
    </header>
  </div>
)

export default App
