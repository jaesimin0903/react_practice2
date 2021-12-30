import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Contents from './components/Contents'
import Introduction from './components/Introduction'
function App() {
  return (
    <div className="App">
      <Header />
      <Contents />
      <Introduction />
    </div>
  );
}

export default App;
