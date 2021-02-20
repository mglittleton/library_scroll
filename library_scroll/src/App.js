import './App.css';
import Title from './Components/Title'
import Scroll from './Components/Scroll'
import Description from './Components/Description'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <Scroll></Scroll>
        <Description></Description>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
